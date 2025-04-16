import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import dotenv from "dotenv";
import starlightImageZoom from "starlight-image-zoom";
import starlight from "@astrojs/starlight";

dotenv.config();

import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "Projects",
    }),
    [tailwind(), robotsTxt(), react()],
  ],
  site: "https://porfolio.dev/",
});
