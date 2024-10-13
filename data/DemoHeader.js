// Import images
import logoImage from "@/assets/images/careox-landing/main-logo-1-1.png";

// Export the data object
export const headerData = {
   logo: {
      src: logoImage,
      alt: "careox",
      width: 223,
   },
   buttons: [
      {
         text: "Documentation",
         link: "https://bracketweb.com/careoxwp/tf-data/documentations/index.html",
         target: "_blank",
         rel: "noreferrer",
      },
      {
         text: "Support",
         link: "mailto:ashik.mdashikurrahman@gmail.com",
         target: "_self",
         rel: "noreferrer",
      },
   ],
};
