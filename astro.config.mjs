import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS && repository && owner);
const isUserOrOrgSite = repository.endsWith(".github.io");

export default defineConfig({
  site: isGitHubPages ? `https://${owner}.github.io` : "http://localhost:4321",
  base: isGitHubPages && !isUserOrOrgSite ? `/${repository}` : "/"
});
