import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import dotenv from 'dotenv';

dotenv.config();

import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [tailwind(), robotsTxt(), react()],
  site: "https://porfolio.dev/"
});
