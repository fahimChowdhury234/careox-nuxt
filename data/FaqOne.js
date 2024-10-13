// Import all necessary images
import faqImageMain from "@/assets/images/resources/faq-1-1.jpg";
import faqImageLeft from "@/assets/images/resources/faq-1-2.jpg";
import faqImageRight from "@/assets/images/resources/faq-1-3.jpg";
import shapeTop from "@/assets/images/shapes/faq-1-shape-1.png";
import shapeBottom from "@/assets/images/shapes/faq-1-shape-2.png";

// FAQ section data
export const faqData = {
   sectionTitle: "OUR FAQ NOW",
   sectionMainTitle: "There's Donation of Center Can Do Question.",
   description: "Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
   accordionItems: [
      {
         id: 1,
         question: "Inspire Raised Why is it important ?",
         answer: "There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words.",
         accentColor: "#ffa415",
      },
      {
         id: 2,
         question: "Start a Fundraiser for Yourself ?",
         answer: "There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words.",
         accentColor: "#fc5528",
         active: true,
      },
      {
         id: 3,
         question: "Raised Education Poor Children ?",
         answer: "There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words.",
         accentColor: "#8139e7",
      },
      {
         id: 4,
         question: "Why is important How Volunteer ?",
         answer: "There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words.",
         accentColor: "#399be7",
      },
   ],
   images: {
      mainImage: faqImageMain,
      leftImage: faqImageLeft,
      rightImage: faqImageRight,
      shapeTop: shapeTop,
      shapeBottom: shapeBottom,
   },
   donateText: "We Give Donations Poor People Impact on Someone’s Life.",
   donateLink: "/donate",
};
