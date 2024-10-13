// data/demoPages.js

import home1 from "@/assets/images/landing/home-1.jpg";
import home2 from "@/assets/images/landing/home-2.jpg";
import home3 from "@/assets/images/landing/home-3.jpg";
import home4 from "@/assets/images/landing/home-4.jpg";
import homeBoxed from "@/assets/images/landing/home-boxed.jpg";
import homeRtl from "@/assets/images/landing/home-rtl.jpg";

export const demoPages = [
   {
      title: "Home Page 01",
      image: home1,
      multiPageLink: "/",
      onePageLink: "/index-one",
      darkPageLink: "/index-dark",
   },
   {
      title: "Home Page 02",
      image: home2,
      multiPageLink: "/index-2",
      onePageLink: "/index-2-one",
      darkPageLink: "/index-2-dark",
   },
   {
      title: "Home Page 03",
      image: home3,
      multiPageLink: "/index-3",
      onePageLink: "/index-3-one",
      darkPageLink: "/index-3-dark",
   },
   {
      title: "Home Page 04",
      image: home4,
      multiPageLink: "/index-4",
      onePageLink: "/index-4-one",
      darkPageLink: "/index-4-dark",
   },
   {
      title: "Home Boxed",
      image: homeBoxed,
      viewPageLink: "/index-boxed",
   },
   {
      title: "Home RTL",
      image: homeRtl,
      viewPageLink: "/index-rtl",
   },
];
