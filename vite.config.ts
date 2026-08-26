// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env["GITHUB_ACTIONS"] === "true";
const basePath = isGitHubPages ? "/sabaresh-glass-studio/" : "/";

export default defineConfig({
  // GitHub Pages only needs the prerendered static client bundle.
  nitro: isGitHubPages ? false : true,
  vite: {
    base: basePath,
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
      crawlLinks: false,
      failOnError: true,
    },
    pages: [
      {
        path: basePath,
        prerender: { enabled: true, outputPath: "/index.html" },
      },
    ],
    // Keep the custom SSR wrapper for server builds; Pages is fully static.
    ...(isGitHubPages ? {} : { server: { entry: "server" } }),
  },
});
