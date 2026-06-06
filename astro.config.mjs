import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://yaoyao-ict.github.io",
  integrations: [react()],
});
