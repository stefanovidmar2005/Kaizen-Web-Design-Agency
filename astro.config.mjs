import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { register } from "swiper/element/bundle";

register();

export default defineConfig({
  integrations: [icon()],
});
