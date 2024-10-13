// ~/data/pricingData.js

// Import images
import pricingImage1 from "~/assets/images/backgrounds/pricing-1-1.jpg";
import pricingImage2 from "~/assets/images/backgrounds/pricing-1-2.jpg";
import pricingImage3 from "~/assets/images/backgrounds/pricing-1-3.jpg";

export const pricingPlans = [
   {
      title: "Basic Plan",
      price: 100,
      period: "M", // Monthly
      features: [
         { text: "We Donate Now", available: false },
         { text: "Team Best Support", available: true },
         { text: "Communicate This Process", available: true },
         { text: "No Risk Guarantee", available: true },
      ],
      accentColor: "#ffa415",
      image: pricingImage1,
      icon: "icon-zakat",
      link: "/contact",
   },
   {
      title: "Advanced Plan",
      price: 199,
      period: "M", // Monthly
      features: [
         { text: "We Donate Now", available: true },
         { text: "Team Best Support", available: false },
         { text: "Communicate This Process", available: true },
         { text: "No Risk Guarantee", available: true },
      ],
      accentColor: "#ff5528",
      image: pricingImage2,
      icon: "icon-messages",
      link: "/contact",
   },
   {
      title: "Premium Plan",
      price: 300,
      period: "Y", // Yearly
      features: [
         { text: "We Donate Now", available: true },
         { text: "Team Best Support", available: false },
         { text: "Communicate This Process", available: true },
         { text: "No Risk Guarantee", available: false },
      ],
      accentColor: "#8139e7",
      image: pricingImage3,
      icon: "icon-multiple-users-silhouette",
      link: "/contact",
   },
   {
      title: "Basic Plan",
      price: 100,
      period: "M", // Monthly
      features: [
         { text: "We Donate Now", available: false },
         { text: "Team Best Support", available: true },
         { text: "Communicate This Process", available: true },
         { text: "No Risk Guarantee", available: true },
      ],
      accentColor: "#ffa415",
      image: pricingImage1,
      icon: "icon-zakat",
      link: "/contact",
   },
   {
      title: "Advanced Plan",
      price: 199,
      period: "M", // Monthly
      features: [
         { text: "We Donate Now", available: true },
         { text: "Team Best Support", available: false },
         { text: "Communicate This Process", available: true },
         { text: "No Risk Guarantee", available: true },
      ],
      accentColor: "#ff5528",
      image: pricingImage2,
      icon: "icon-messages",
      link: "/contact",
   },
   {
      title: "Premium Plan",
      price: 300,
      period: "Y", // Yearly
      features: [
         { text: "We Donate Now", available: true },
         { text: "Team Best Support", available: false },
         { text: "Communicate This Process", available: true },
         { text: "No Risk Guarantee", available: false },
      ],
      accentColor: "#8139e7",
      image: pricingImage3,
      icon: "icon-multiple-users-silhouette",
      link: "/contact",
   },
];
