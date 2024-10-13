// ~/data/About.js
import mainImageOne from "~/assets/images/resources/about-1-3.jpg";
import mainImageTwo from "~/assets/images/resources/about-1-4.jpg";
import shapeTwo from "~/assets/images/shapes/about-1-shape-5.png";
import shapeThree from "~/assets/images/shapes/about-1-shape-3.png";
export const aboutData = {
   sectionTitle: {
      tagline: "OUR ABOUT US",
      title: "We Believe This Life's About Giving To Poor People.",
   },
   content: {
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
      list: [
         {
            text: 'We help companies develop powerful corporate social <NuxtLink to="/about">Responsibility,</NuxtLink>',
            icon: "icofont-check-circled",
         },
         {
            text: "Helped fund 3,265 Project powerful corporate poor.",
            icon: "icofont-check-circled",
         },
      ],
      finalText: "We Give Donations Poor People Impact on Someone’s Life.",
   },
   images: {
      mainImageOne: mainImageOne,
      mainImageTwo: mainImageTwo,
      videoLink: "https://www.youtube.com/watch?v=h9MbznbxlLc",
      shapeTwo: shapeTwo,
      shapeThree: shapeThree,
   },
};
