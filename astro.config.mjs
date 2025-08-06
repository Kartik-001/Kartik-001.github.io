// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // URL of your published site
  site: "https://kartik-001.github.io",

  // omit `base` when deploying to a root-level repo (i.e. <username>.github.io)
  // base: "/your-repo-name",

  vite: {
    plugins: [tailwindcss()],
  },
});
