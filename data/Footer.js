import bgImage from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import logo from "@/assets/images/logo-light.png";

export const footerData = {
   bgImage: bgImage,
   newsletter: {
      icon: "icon-messages",
      title: "Our Newsletter",
      text: "We are dolor sit amet consectetur",
      formUrl: "MAILCHIMP_FORM_URL",
   },
   companyInfo: {
      logo: logo,
      description: "We help businesses maximize their online presence with a personalized approach to digital marketing.",
      hotline: {
         text: "Hotline 24/7",
         phone: "(+99) 95464 2569",
         phoneUrl: "tel:+99954642569",
      },
   },
   services: [
      { title: "Give Donation", url: "/donate" },
      { title: "Education Support", url: "/donate" },
      { title: "Our Campaign", url: "/events" },
      { title: "Our Campaign", url: "/events" },
      { title: "Our Campaign", url: "/events" },
   ],
   quickLinks: [
      { title: "About Us", url: "/about" },
      { title: "Our News", url: "/blog-grid" },
      { title: "Our Campaign", url: "/events" },
      { title: "Contact Us", url: "/contact" },
      { title: "Login", url: "/login" },
   ],
   contactInfo: [
      {
         icon: "icofont-clock-time",
         text: "Open Hours of Government: Mon - Fri: 8.00 am. - 6.00 pm.",
         accentColor: "#ffa415",
      },
      {
         icon: "icofont-location-pin",
         text: "13/A, Miranda Halim City.",
         accentColor: "#ff5528",
      },
      {
         icon: "icofont-email",
         text: "needhelp@company.com",
         link: "mailto:needhelp@company.com",
         accentColor: "#8139e7",
      },
   ],
   socialLinks: [
      {
         platform: "Facebook",
         icon: "fab fa-facebook-f",
         url: "https://facebook.com",
         accentColor: "#ffa415",
      },
      {
         platform: "Twitter",
         icon: "fab fa-twitter",
         url: "https://twitter.com",
         accentColor: "#fc5528",
      },
      {
         platform: "Pinterest",
         icon: "fab fa-pinterest-p",
         url: "https://pinterest.com",
         accentColor: "#8139e7",
      },
      {
         platform: "Instagram",
         icon: "fab fa-instagram",
         url: "https://instagram.com",
         accentColor: "#44c895",
      },
   ],
   copyrightText: "© Copyright 2024 by Careox Nuxt Template.",
};
