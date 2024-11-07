// ~/data/donateData.js

import donateBg from "~/assets/images/backgrounds/donate-bg-1.jpg";
import donateImage from "~/assets/images/resources/donate-1-1.png";
import donateInfoShape from "~/assets/images/resources/donate-info-shape.png";
import donateInfoBg from "~/assets/images/backgrounds/donate-info-bg.jpg";
import donateAreaBg from "~/assets/images/shapes/donate-area-bg.jpg";
import donateArrow from "~/assets/images/shapes/donate-arrow.png";

export const donateData = {
   donateSection: {
      background: donateBg,
      image: donateImage,
   },
   donateInfo: {
      shapeImage: donateInfoShape,
      leftBackground: donateInfoBg,
      areaBackground: donateAreaBg,
      date: "02 Sep 2024",
      progress: {
         percent: 85,
         goals: "$23,000 Goals",
         donate: "$9,000 Donate",
      },
      form: {
         defaultAmount: 200,
         buttonAmounts: [100, 200, 300],
         buttonLabels: ["Custom", "Donate Now"],
         arrowImage: donateArrow,
      },
      titles: {
         tagline: "OUR Donate Now",
         mainTitle: "Get Inspire Donate Help <br>Change a life.",
      },
   },
};
