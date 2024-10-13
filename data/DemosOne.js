// data.js

// Importing images
import demoImg1 from "@/assets/images/careox-landing/home-1.jpg";
import demoImg2 from "@/assets/images/careox-landing/home-2.jpg";
import demoImg3 from "@/assets/images/careox-landing/home-3.jpg";
import demoImg4 from "@/assets/images/careox-landing/home-4.jpg";
import demoImgBoxed from "@/assets/images/careox-landing/home-boxed.jpg";
import demoImgRTL from "@/assets/images/careox-landing/home-rtl.jpg";

// Exporting the demos data
export const demosData = [
   {
      image: demoImg1,
      width: 370,
      height: 431,
      alt: "Home Page 01",
      title: "Home Page 01",
      buttons: [
         { text: "Multi Page", link: "/" },
         { text: "One Page", link: "/index-one-page" },
         { text: "Dark Page", link: "/index-dark" },
      ],
   },
   {
      image: demoImg2,
      width: 370,
      height: 431,
      alt: "Home Page 02",
      title: "Home Page 02",
      buttons: [
         { text: "Multi Page", link: "/index-2" },
         { text: "One Page", link: "/index-2-one-page" },
         { text: "Dark Page", link: "/index-2-dark" },
      ],
   },
   {
      image: demoImg3,
      width: 370,
      height: 431,
      alt: "Home Page 03",
      title: "Home Page 03",
      buttons: [
         { text: "Multi Page", link: "/index-3" },
         { text: "One Page", link: "/index-3-one-page" },
         { text: "Dark Page", link: "/index-3-dark" },
      ],
   },
   {
      image: demoImg4,
      width: 370,
      height: 431,
      alt: "Home Page 04",
      title: "Home Page 04",
      buttons: [
         { text: "Multi Page", link: "/index-4" },
         { text: "One Page", link: "/index-4-one-page" },
         { text: "Dark Page", link: "/index-4-dark" },
      ],
   },
   {
      image: demoImgBoxed,
      width: 370,
      height: 431,
      alt: "Home Boxed",
      title: "Home Boxed",
      buttons: [{ text: "View Page", link: "/index-boxed" }],
   },
   {
      image: demoImgRTL,
      width: 370,
      height: 431,
      alt: "Home RTL",
      title: "Home RTL",
      buttons: [{ text: "View Page", link: "/index-rtl" }],
   },
];
