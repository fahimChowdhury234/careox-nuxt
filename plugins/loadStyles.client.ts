export default defineNuxtPlugin((nuxtApp) => {
  let previousRouteName: null = null;
  let styleElement = ref(null);

  // @ts-ignore
  nuxtApp.$router.afterEach(async (to) => {
    const isRtlRoute = to.name === "index-rtl";
    const demoLanding = to.name === "demo-landing";

    // Remove any existing dynamically added styles
    if (to.name !== previousRouteName && styleElement.value) {
      // @ts-ignore

      styleElement.value.remove();
      styleElement.value = null;
    }

    try {
      // Conditionally load CSS based on the route
      // @ts-nocheck
      if (isRtlRoute) {
        const careoxRTL = await import("~/assets/css/careox-rtl.css?inline");
        const careoxCustomRTL = await import("~/assets/css/careox-custom-rtl.css?inline");

        // Apply RTL styles
        // @ts-ignore
        styleElement.value = document.createElement("style");
        // @ts-ignore

        styleElement.value.innerHTML = careoxRTL.default + careoxCustomRTL.default;
        // @ts-ignore

        document.head.appendChild(styleElement.value);
      } else if (demoLanding) {
        const careoxLanding = await import("~/assets/css/careox-landing.css?inline");

        // Apply landing page styles
        // @ts-ignore

        styleElement.value = document.createElement("style");
        // @ts-ignore

        styleElement.value.innerHTML = careoxLanding.default;
        // @ts-ignore

        document.head.appendChild(styleElement.value);
      } else {
        const careox = await import("~/assets/css/careox.css?inline");

        // Apply default styles
        // @ts-ignore

        styleElement.value = document.createElement("style");
        // @ts-ignore

        styleElement.value.innerHTML = careox.default;
        // @ts-ignore

        document.head.appendChild(styleElement.value);
      }
    } catch (error) {
      console.error("Error loading style:", error);
    }

    // Update previous route name
    previousRouteName = to.name;
  });
});
