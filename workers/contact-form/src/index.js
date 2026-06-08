const ALLOWED_ORIGINS = new Set([
  "https://grzegorz-samson.github.io",
  "http://localhost:4321",
  "http://127.0.0.1:4321",
  "http://localhost:4323",
  "http://127.0.0.1:4323",
  "http://localhost:4324",
  "http://127.0.0.1:4324",
]);

function getAllowedOrigin(request) {
  const origin = request.headers.get("Origin");
  return origin && ALLOWED_ORIGINS.has(origin) ? origin : null;
}

function buildCorsHeaders(origin) {
  const headers = {
    Vary: "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };

  if (origin) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

function jsonResponse(data, status, origin = null) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...buildCorsHeaders(origin),
    },
  });
}

function noContentResponse(origin) {
  return new Response(null, {
    status: 204,
    headers: buildCorsHeaders(origin),
  });
}

function normalizeText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(body) {
  const payload = {
    name: normalizeText(body?.name, 120),
    replyTo: normalizeText(body?.replyTo, 180),
    subject: normalizeText(body?.subject, 180),
    message: normalizeText(body?.message, 4000),
    turnstileToken: normalizeText(body?.turnstileToken, 2048),
    website: normalizeText(body?.website, 200),
  };

  if (!payload.name) {
    return { ok: false, message: "Please provide your name." };
  }

  if (!payload.replyTo || !isValidEmail(payload.replyTo)) {
    return { ok: false, message: "Please provide a valid reply email address." };
  }

  if (!payload.subject) {
    return { ok: false, message: "Please provide a subject line." };
  }

  if (!payload.message) {
    return { ok: false, message: "Please provide a message." };
  }

  if (payload.website) {
    return { ok: false, code: "spam_detected", message: "The message could not be verified." };
  }

  if (!payload.turnstileToken) {
    return { ok: false, code: "verification_required", message: "Verification is required before sending." };
  }

  return { ok: true, payload };
}

async function verifyTurnstile(token, request, env) {
  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  const result = await response.json().catch(() => null);
  return Boolean(response.ok && result?.success);
}

function buildEmailText({ payload, origin, timestamp }) {
  return [
    "Website contact form submission",
    `Submitted at: ${timestamp}`,
    `Origin: ${origin}`,
    "",
    `Name: ${payload.name}`,
    `Reply email: ${payload.replyTo}`,
    `Subject: ${payload.subject}`,
    "",
    payload.message,
  ].join("\n");
}

async function sendViaResend({ payload, origin, env }) {
  const timestamp = new Date().toISOString();
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      subject: `Website contact form: ${payload.subject}`,
      text: buildEmailText({ payload, origin, timestamp }),
      reply_to: [payload.replyTo],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error ${response.status}: ${errorText}`);
  }
}

function hasRuntimeConfig(env) {
  return Boolean(
    env.TURNSTILE_SECRET_KEY &&
      env.RESEND_API_KEY &&
      env.CONTACT_TO_EMAIL &&
      env.CONTACT_FROM_EMAIL,
  );
}

export default {
  async fetch(request, env) {
    const origin = getAllowedOrigin(request);
    const { pathname } = new URL(request.url);

    if (request.method === "OPTIONS") {
      if (!origin) {
        return jsonResponse(
          { ok: false, code: "origin_not_allowed", message: "Origin not allowed." },
          403,
          null,
        );
      }

      return noContentResponse(origin);
    }

    if (pathname !== "/contact") {
      return jsonResponse(
        { ok: false, code: "not_found", message: "Endpoint not found." },
        404,
        origin,
      );
    }

    if (request.method !== "POST") {
      return jsonResponse(
        { ok: false, code: "method_not_allowed", message: "Method not allowed." },
        405,
        origin,
      );
    }

    if (!origin) {
      return jsonResponse(
        { ok: false, code: "origin_not_allowed", message: "Origin not allowed." },
        403,
        null,
      );
    }

    if (!hasRuntimeConfig(env)) {
      return jsonResponse(
        { ok: false, code: "configuration_error", message: "Contact form configuration is incomplete." },
        500,
        origin,
      );
    }

    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse(
        { ok: false, code: "unsupported_media_type", message: "Expected JSON request body." },
        415,
        origin,
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return jsonResponse(
        { ok: false, code: "invalid_json", message: "Request body is invalid." },
        400,
        origin,
      );
    }

    const validation = validatePayload(body);
    if (!validation.ok) {
      return jsonResponse(
        {
          ok: false,
          code: validation.code ?? "validation_error",
          message: validation.message,
        },
        400,
        origin,
      );
    }

    const turnstileValid = await verifyTurnstile(validation.payload.turnstileToken, request, env);
    if (!turnstileValid) {
      return jsonResponse(
        { ok: false, code: "verification_failed", message: "Verification failed. Please try again." },
        400,
        origin,
      );
    }

    try {
      await sendViaResend({ payload: validation.payload, origin, env });
      return jsonResponse(
        { ok: true, message: "Your message has been sent successfully." },
        200,
        origin,
      );
    } catch (error) {
      console.error("Contact form delivery failed:", error instanceof Error ? error.message : error);
      return jsonResponse(
        {
          ok: false,
          code: "delivery_failed",
          message: "The message could not be sent right now. Please try again later.",
        },
        502,
        origin,
      );
    }
  },
};
