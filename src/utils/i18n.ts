import { withBase } from "./withBase";

export type Locale = "en" | "pl";

function normalizePath(path: string): string {
  if (!path || path === "/") {
    return "/";
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.replace(/\/+$/, "") || "/";
}

export function routePath(path: string, locale: Locale = "en"): string {
  const normalized = normalizePath(path);

  if (locale === "pl") {
    return normalized === "/" ? "/pl" : `/pl${normalized}`;
  }

  return normalized;
}

export function localizedPath(path: string, locale: Locale = "en"): string {
  return withBase(routePath(path, locale));
}

export function stripLocale(path: string): string {
  const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
  const withoutBase = base && path.startsWith(base) ? path.slice(base.length) || "/" : path;
  const normalized = normalizePath(withoutBase);

  if (normalized === "/pl") {
    return "/";
  }

  if (normalized.startsWith("/pl/")) {
    return normalized.slice(3) || "/";
  }

  return normalized;
}
