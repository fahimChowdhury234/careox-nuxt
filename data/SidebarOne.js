// ~/data/sidebar.js

// Import the logo image
import logoLight from "~/assets/images/logo-light.png";

export const sidebarData = {
   logo: {
      src: logoLight,
      alt: "Careox HTML",
      width: 223,
      link: "/",
   },
   text: "Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ puru rhoncu tincidunt odio ultrices. Sed feugiat feugiat felis.",
   contact: {
      address: "85 Ketch Harbour Road Bensalem, PA 19020",
      email: {
         address: "needhelp@company.com",
         link: "mailto:needhelp@company.com",
      },
      phone: {
         number: "099 695 695 35",
         link: "tel:09969569535",
      },
   },
   social: [
      {
         platform: "Facebook",
         link: "https://facebook.com",
         iconClass: "fab fa-facebook-f",
         color: "#ffa415",
      },
      {
         platform: "Twitter",
         link: "https://twitter.com",
         iconClass: "fab fa-twitter",
         color: "#fc5528",
      },
      {
         platform: "Pinterest",
         link: "https://pinterest.com",
         iconClass: "fab fa-pinterest-p",
         color: "#8139e7",
      },
      {
         platform: "Instagram",
         link: "https://instagram.com",
         iconClass: "fab fa-instagram",
         color: "#44c895",
      },
   ],
   newsletter: {
      placeholder: "Email address",
      actionUrl: "#", // Replace with the actual MailChimp URL if available
   },
};
