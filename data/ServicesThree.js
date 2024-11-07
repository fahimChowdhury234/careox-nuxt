// Importing images
import serviceImage1 from "@/assets/images/resources/service-3-1.jpg";
import serviceImage2 from "@/assets/images/resources/service-3-2.jpg";
import serviceImage3 from "@/assets/images/resources/service-3-3.jpg";
import shapeLeft from "@/assets/images/shapes/service-3-shape-1.png";
import shapeRight from "@/assets/images/shapes/service-3-shape-2.png";
// Content data for static parts
export const serviceContent = {
   tagline: "OUR BEST SERVICE",
   title: "We Help Poor This Life's <br> Service Now",
   bottomText: "We Give Donations Poor People Impact on Someone’s Life.",
   donateButtonText: "Donate Now",
   donateLink: "/donate",
   shapeLeft: shapeLeft,
   shapeRight: shapeRight,
};

// Data for the service carousel items
export const services = [
   {
      imageNormal: serviceImage1,
      imageHover: serviceImage1,
      icon: "icon-generous",
      title: "Fund Poor Raised",
      text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
      readMoreLink: "/about",
      accentColor: "#ffa415",
      delay: "00ms",
   },
   {
      imageNormal: serviceImage2,
      imageHover: serviceImage2,
      icon: "icon-zakat",
      title: "Money This Treatment",
      text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
      readMoreLink: "/about",
      accentColor: "#ff5528",
      delay: "100ms",
   },
   {
      imageNormal: serviceImage3,
      imageHover: serviceImage3,
      icon: "icon-zakat-two",
      title: "Fund Hand Children",
      text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
      readMoreLink: "/about",
      accentColor: "#8139e7",
      delay: "200ms",
   },
];
