// Import all necessary images
import aboutShape from "@/assets/images/resources/about-2-bg-shape.png";
import aboutImage1 from "@/assets/images/resources/about-2-1.jpg";
import aboutImage2 from "@/assets/images/resources/about-2-2.jpg";
import shapeOne from "@/assets/images/shapes/about-2-shape-1.png";
import shapeTwo from "@/assets/images/shapes/about-2-shape-2.png";
import authorImage from "@/assets/images/resources/about-2-author.jpg";
import signImage from "@/assets/images/resources/sign.png";

// About section data
export const aboutData = {
   shapeImage: aboutShape,
   mainImage: aboutImage1,
   secondaryImage: aboutImage2,
   shapeOne: shapeOne,
   shapeTwo: shapeTwo,
   videoLink: "https://www.youtube.com/watch?v=h9MbznbxlLc",
   videoText: "Always Help Us!",
   sectionTitle: "OUR ABOUT US",
   sectionMainTitle: "We Believe This Life’s About Give For Poor People.",
   description: "Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
   donateItems: [
      {
         id: 1,
         title: "Join Our Team",
         count: "5,472",
         iconClass: "icon-charity-three",
         accentColor: "#ffa415",
      },
      {
         id: 2,
         title: "Donate Now",
         count: "$30,768",
         iconClass: "icon-zakat",
         accentColor: "#ff5528",
      },
      {
         id: 3,
         title: "Total Fund Raised",
         count: "1,193,210",
         iconClass: "icon-messages",
         accentColor: "#8742e8",
      },
   ],
   author: {
      name: "Jasmin Weiss",
      designation: "Founder",
      image: authorImage,
      signImage: signImage,
   },
};
