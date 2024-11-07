// plugins/auto-animate.js
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

export default defineNuxtPlugin((nuxtApp) => {
   if (process.client) {
      nuxtApp.vueApp.use(autoAnimatePlugin);
   }
});
