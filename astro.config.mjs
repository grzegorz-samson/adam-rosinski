import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "YOUR_GITHUB_USERNAME";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "adam-rosinski";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserPagesRepo = repository === `${owner}.github.io`;

export default defineConfig({
  site: isGitHubActions ? `https://${owner}.github.io` : "http://localhost:4321",
  base: isGitHubActions && !isUserPagesRepo ? `/${repository}` : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
