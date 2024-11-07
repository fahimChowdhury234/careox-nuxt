// ~/data/benefitData.js

// Import images
import benefitImage1 from "@/assets/images/resources/benefit-1-1.jpg";
import benefitImage2 from "@/assets/images/resources/benefit-1-2.jpg";
import factImage1 from "@/assets/images/resources/fact-1-1.jpg";
import factImage2 from "@/assets/images/resources/fact-1-2.jpg";
import factImage3 from "@/assets/images/resources/fact-1-3.jpg";
import factImage4 from "@/assets/images/resources/fact-1-4.jpg";

export const benefitsContent = {
   tagline: "benefits of Giving",
   title: "Bring More Meaning to Your Life & Family",
   description: "Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
   images: [benefitImage1, benefitImage2],
};

export const facts = [
   {
      image: factImage1,
      icon: "icon-charity-two",
      count: 232, // Just the number
      suffix: "K", // Add a suffix
      text: "Poor Educate",
      accentColor: "#ffa415",
   },
   {
      image: factImage2,
      icon: "icon-zakat",
      count: 99, // Just the number
      suffix: "M+", // Add a suffix
      text: "Donate now",
      accentColor: "#ff5528",
   },
   {
      image: factImage3,
      icon: "icon-interactions",
      count: 40, // Just the number
      suffix: "K+", // Add a suffix
      text: "Clients Help",
      accentColor: "#8139e7",
   },
   {
      image: factImage4,
      icon: "icon-multiple-users-silhouette",
      count: 35, // Just the number
      suffix: "K+", // Add a suffix
      text: "Team Support",
      accentColor: "#44c895",
   },
];
