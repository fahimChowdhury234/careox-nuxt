import donationImage1 from "~/assets/images/donation/donation-1-1.jpg";
import donationImage2 from "~/assets/images/donation/donation-1-2.jpg";
import authorImage from "~/assets/images/resources/author-1-1.jpg";
export const donatePageData = {
   initialAmount: 300,
   suggestedAmounts: [10, 50, 100, 300],
   paymentMethods: [
      { id: "test", label: "Test Donation" },
      { id: "offline", label: "Offline Donation" },
   ],
   amountPlaceholder: "Amount",
};
// Author data
export const author = {
   name: "Phillip Haris",
   designation: "Founder",
   date: "Sep 2024",
   category: "Environment",
   location: "London, Canada",
   authorImage: authorImage,
};
// Data for carousel items
export const carouselItems = [
   {
      image: donationImage1,
      alt: "careox donation 1",
      category: "Poor",
      title: "We Can Aenean Poor leo Nec This Rnare.",
      text: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      link: "/donations-details",
      color: "#ffa415",
      percent: 85,
      goal: "$23,000 Goals",
      donate: "$9,000 Donate",
   },
   {
      image: donationImage2,
      alt: "careox donation 2",
      category: "Raised",
      title: "Get Poor Money Strang People Acutor.",
      text: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      link: "/donations-details",
      color: "#ff5528",
      percent: 80,
      goal: "$13,000 Goals",
      donate: "$5,000 Donate",
   },
   // Add more items as needed
];
