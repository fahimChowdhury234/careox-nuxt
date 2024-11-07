// data/featureOneData.js
import bgImage from "@/assets/images/shapes/feature-bg-1.png";
import shapeArrow from "@/assets/images/shapes/feature-1-shape-arrow.png";
import shapeIcon from "@/assets/images/shapes/feature-1-shape.png";

export const featureOneData = {
   bgImage,
   shapeArrow,
   shapeIcon,
   features: [
      {
         id: 1,
         title: "Treatment Help",
         text: "No matter what have.",
         icon: "icon-zakat",
         accentColor: "#ffa415",
         link: "/about",
      },
      {
         id: 2,
         title: "Charity Donate",
         text: "No matter what have.",
         icon: "icon-charity-two",
         accentColor: "#fc5528",
         link: "/about",
         isReverse: true,
      },
      {
         id: 3,
         title: "Money Raised",
         text: "No matter what have.",
         icon: "icon-generous",
         accentColor: "#8139e7",
         link: "/about",
      },
   ],
};
