// data.js
import aboutShape from "@/assets/images/shapes/about-1-shape-4.png";
import aboutImage1 from "@/assets/images/resources/about-1-1.jpg";
import aboutImage2 from "@/assets/images/resources/about-1-2.jpg";
import shapeOne from "@/assets/images/shapes/about-1-shape-1.png";
import shapeTwo from "@/assets/images/shapes/about-1-shape-2.png";
import shapeThree from "@/assets/images/shapes/about-1-shape-3.png";

export const aboutData = {
   shapeOne,
   shapeTwo,
   shapeThree,
   shapeImage: aboutShape,
   images: {
      one: aboutImage1,
      two: aboutImage2,
   },
   content: {
      tagline: "OUR ABOUT US",
      title: "We Believe This Life's About Giving To Poor People.",
      text: "Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
      boxes: [
         {
            icon: "icon-zakat",
            title: "Treatment Help",
            text: "No matter what you have.",
            accentColor: "#ffa415",
         },
         {
            icon: "icon-charity",
            title: "Help Raising",
            text: "No matter what you have.",
            accentColor: "#ff5528",
         },
      ],
      listItems: [
         {
            text: "We help companies develop powerful corporate social",
            link: "/about",
            linkText: "Responsibility,",
         },
         {
            text: "Helped fund 3,265 projects for the powerful poor.",
         },
      ],
      donationText: "We Give Donations To Poor People Impact on Someone’s Life.",
   },
   donationLink: "/donate",
};
