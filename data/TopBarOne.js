// Import images
import logoDark from "@/assets/images/logo-dark.png";
import logoWhite from "@/assets/images/logo-light.png";

import arrowImage from "@/assets/images/shapes/arrow-1.png";

// Topbar data
export const topbarData = {
   welcomeText: "Wellcome To",
   companyName: "Careox",
   socialLinks: [
      {
         platform: "Facebook",
         iconClass: "fab fa-facebook-f",
         url: "https://facebook.com",
         color: "#ff5528",
      },
      {
         platform: "Twitter",
         iconClass: "fab fa-twitter",
         url: "https://twitter.com",
         color: "#ffa415",
      },
      {
         platform: "Vimeo",
         iconClass: "fab fa-vimeo-v",
         url: "https://vimeo.com",
         color: "#8139e7",
      },
      {
         platform: "Pinterest",
         iconClass: "fab fa-pinterest-p",
         url: "https://pinterest.com",
         color: "#44c895",
      },
   ],
   contactInfo: [
      {
         type: "phone",
         iconClass: "icon-phone-call",
         link: "tel:+0449123452",
         text: "+0(449) 123 452",
         subtitle: "Requesting a Call",
         color: "#ffa415",
      },
      {
         type: "email",
         iconClass: "icon-email",
         link: "mailto:info@email.com",
         text: "info@email.com",
         subtitle: "Your E-mail",
         color: "#ff5528",
      },
      {
         type: "address",
         iconClass: "icon-location",
         text: "23/29 St Road",
         subtitle: "Melbourne, London",
         color: "#8139e7",
      },
   ],
   logoWhite,
   logoDark,
   donateButton: {
      text: "Donate Now",
      iconClass: "icofont-heart",
      url: "/donate",
   },
   arrowImage,
};
