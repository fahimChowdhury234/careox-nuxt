// plugins/jarallax.client.js
import { jarallax } from "jarallax";

export default defineNuxtPlugin(() => {
   return {
      provide: {
         jarallax,
      },
   };
});
