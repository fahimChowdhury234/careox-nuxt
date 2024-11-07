// Import images and shapes
import tabImage1 from "@/assets/images/resources/tab-1-1.jpg";
import tabImage2 from "@/assets/images/resources/tab-1-2.jpg";
import tabImage3 from "@/assets/images/resources/tab-1-3.jpg";
import tabBackground from "@/assets/images/shapes/tab-bg.jpg";
import tabShape from "@/assets/images/shapes/tab-shape-1.png";

export const tabData = {
   sectionTagline: "Get Daily Updates",
   sectionTitle: "We Should Charity Foundation",
   tabs: [
      {
         name: "Education Help",
         icon: "icon-zakat",
         backgroundImage: tabBackground,
         image: tabImage1,
         shape: tabShape,
         accentColor: "#ffa415",
         title: "Get Inspire and Help Support",
         boxes: [
            {
               title: "We are Sponsor an Entire Project",
               text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
               accentColor: "#ffa415",
            },
            {
               title: "This Poor it Important So Support",
               text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
               accentColor: "#ff5528",
            },
         ],
      },
      {
         name: "Medical Support",
         icon: "icon-charity-two",
         backgroundImage: tabBackground,
         image: tabImage2,
         shape: tabShape,
         accentColor: "#ff5528",
         title: "Get Inspire and Help Support",
         boxes: [
            {
               title: "We are Sponsor an Entire Project",
               text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
               accentColor: "#ffa415",
            },
            {
               title: "This Poor it Important So Support",
               text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
               accentColor: "#ff5528",
            },
         ],
      },
      {
         name: "Healthy Food",
         icon: "icon-generous",
         backgroundImage: tabBackground,
         image: tabImage3,
         shape: tabShape,
         accentColor: "#8139e7",
         title: "Get Inspire and Help Support",
         boxes: [
            {
               title: "We are Sponsor an Entire Project",
               text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
               accentColor: "#ffa415",
            },
            {
               title: "This Poor it Important So Support",
               text: "With schools closed in NSW and Victoria, and childcare restricted to authorized workers in places.",
               accentColor: "#ff5528",
            },
         ],
      },
   ],
};
