import shapeBackground from "@/assets/images/shapes/service-shape-3.png";
import shapeItem from "@/assets/images/shapes/service-two-shape.png";
import serviceImage1 from "@/assets/images/resources/service-2-1.jpg";
import serviceImage2 from "@/assets/images/resources/service-2-2.jpg";
import serviceImage3 from "@/assets/images/resources/service-2-3.jpg";
import serviceImage4 from "@/assets/images/resources/service-2-4.jpg";
import serviceImage5 from "@/assets/images/resources/service-2-5.jpg";
import serviceImage6 from "@/assets/images/resources/service-2-6.jpg";

// Service section data
export const serviceData = {
   shapeBackground,
   sectionTitle: "OUR BEST SERVICE",
   sectionMainTitle: "We Help Poor This Lifes <br> Service Now",
   services: [
      {
         id: 1,
         title: "Fund Poor Raised",
         description: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
         image: serviceImage1,
         shapeItem: shapeItem,
         iconClass: "icon-generous",
         accentColor: "#ffa415",
         readMoreLink: "/about",
      },
      {
         id: 2,
         title: "Money This Treatment",
         description: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
         image: serviceImage2,
         shapeItem: shapeItem,
         iconClass: "icon-zakat",
         accentColor: "#fc5528",
         readMoreLink: "/about",
      },
      {
         id: 3,
         title: "Fund Hand Children",
         description: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
         image: serviceImage3,
         shapeItem: shapeItem,
         iconClass: "icon-zakat-two",
         accentColor: "#8139e7",
         readMoreLink: "/about",
      },
      {
         id: 4,
         title: "Inspire Help Raised",
         description: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
         image: serviceImage4,
         iconClass: "icon-charity-three",
         accentColor: "#399be7",
         readMoreLink: "/about",
      },
      {
         id: 5,
         title: "Donation Help Raised",
         description: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
         image: serviceImage5,
         shapeItem: shapeItem,
         iconClass: "icon-interactions",
         accentColor: "#44c895",
         readMoreLink: "/about",
      },
      {
         id: 6,
         title: "Child Education Raised",
         description: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
         image: serviceImage6,
         shapeItem: shapeItem,
         iconClass: "icon-charity-two",
         accentColor: "#d340c3",
         readMoreLink: "/about",
      },
   ],
};
