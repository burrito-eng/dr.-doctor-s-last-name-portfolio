// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_BUILD=true prerenders every page to plain HTML with no server (used for the GitHub Pages
// demo). BASE_PATH serves the site from a sub-path, e.g. "/repo-name/". Both are set only by CI;
// Lovable and local dev leave them unset and keep the default Cloudflare build.
const isStaticBuild = process.env.STATIC_BUILD === "true";

export default defineConfig({
  vite: { base: process.env.BASE_PATH || "/" },
  nitro: isStaticBuild ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: isStaticBuild ? { enabled: true, crawlLinks: true } : undefined,
  },
});
