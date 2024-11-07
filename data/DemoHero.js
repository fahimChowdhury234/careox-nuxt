// data.js

// Importing images
import heroBg from "@/assets/images/careox-landing/hero-bg-1-1.png";
import heroImg1 from "@/assets/images/careox-landing/hero-img-1-1.png";
import heroImg2 from "@/assets/images/careox-landing/hero-img-1-2.png";
import heroImg3 from "@/assets/images/careox-landing/hero-img-1-3.png";

export const heroSectionData = {
   title: "Creative. Powerful. Customizable.",
   text: "Building a website with the careox HTML Template is super fast and easy.",
   background: heroBg,
   images: [
      { src: heroImg1, alt: "home one", width: 899, height: 258, delay: "0" },
      { src: heroImg2, alt: "home two", width: 779, height: 524, delay: "1000ms" },
      { src: heroImg3, alt: "home three", width: 659, height: 658, delay: "1500ms" },
   ],
   links: [
      { text: "Purchase Template", href: "#", target: "_blank" },
      { text: "Browse Demo", href: "#demos", target: "_self" },
   ],
};
