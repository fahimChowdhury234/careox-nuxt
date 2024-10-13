// data/testimonialsData.js
import testimonialBgShape from "@/assets/images/shapes/testimonial-bg-1.png";
import testimonialBg from "@/assets/images/resources/testimonail-1-bg.jpg";

import testi1 from "@/assets/images/resources/testi-1-1.jpg";
import testi2 from "@/assets/images/resources/testi-1-2.jpg";
import testi3 from "@/assets/images/resources/testi-1-3.jpg";
import testi4 from "@/assets/images/resources/testi-1-4.jpg";

export const testimonialsData = {
   testimonialBgShape: testimonialBgShape,
   testimonialBg: testimonialBg,
   sectionTitle: {
      tagline: "Our testimonials",
      title: "What They’re Talking About Company?",
      description: "Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
   },
   imageSlider: [
      { imgSrc: testi1, accentColor: "#ffa415" },
      { imgSrc: testi2, accentColor: "#fc5528" },
      { imgSrc: testi3, accentColor: "#8139e7" },
      { imgSrc: testi4, accentColor: "#44c895" },
   ],
   testimonials: [
      {
         name: "Jack Turpin",
         designation: "Founder",
         image: testi1,
         rating: 5,
         accentColor: "#ffa415",
         content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or.",
      },
      {
         name: "Jasmin Weiss",
         designation: "Co Founder",
         image: testi2,
         rating: 5,
         accentColor: "#fc5528",
         content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or.",
      },
      {
         name: "David Cooper",
         designation: "Reviewer",
         image: testi3,
         rating: 5,
         accentColor: "#8139e7",
         content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or.",
      },
      {
         name: "Mark Smith",
         designation: "Reviewer",
         image: testi4,
         rating: 5,
         accentColor: "#44c895",
         content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or.",
      },
   ],
};
