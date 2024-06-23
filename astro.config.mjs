import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import { register } from "swiper/element/bundle";

register();
AOS.init();
export default defineConfig({
  integrations: [icon()],
  image: {
    service: passthroughImageService(),
  },
});
