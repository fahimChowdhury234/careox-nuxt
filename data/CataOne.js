// data.js
import ctaBg1 from "@/assets/images/backgrounds/cta-bg-1-1.jpg";
import ctaBg2 from "@/assets/images/backgrounds/cta-bg-1-2.jpg";
import ctaShape1 from "@/assets/images/shapes/cta-1-shape-1.png";
import ctaShape2 from "@/assets/images/shapes/cta-1-shape-2.png";

export const ctaData = [
   {
      id: 1,
      title: "Become Volunteer",
      text: "Lorem ipsum dolor sit amet, conse dtetur adipi sicing <br>elitare many variations.",
      backgroundImage: ctaBg1,
      buttonLink: "/contact",
      buttonText: "See More",
      shapeImage: ctaShape2,
   },
   {
      id: 2,
      title: "Join Us Volunteer",
      text: "Lorem ipsum dolor sit amet, conse dtetur adipi sicing <br>elitare many variations.",
      backgroundImage: ctaBg2,
      buttonLink: "/contact",
      buttonText: "See More",
      shapeImage: ctaShape1,
      isRightAligned: true,
   },
];
