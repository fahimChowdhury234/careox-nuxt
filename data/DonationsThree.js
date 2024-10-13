// Import images for donations
import donationBg from "@/assets/images/backgrounds/donation-bg-3.jpg";
import donationImage1 from "@/assets/images/donation/donation-3-1.jpg";
import donationImage2 from "@/assets/images/donation/donation-3-2.jpg";
import donationImage3 from "@/assets/images/donation/donation-3-3.jpg";
import donationImage4 from "@/assets/images/donation/donation-3-4.jpg";

export const donationsData = {
   backgroundImage: donationBg,
   sectionTitle: {
      tagline: "Our Popular Causes",
      title: "Help & Donate Now Find <br> The Popular Cause",
   },
   items: [
      {
         id: 1,
         accentColor: "#ffa415",
         image: donationImage1,
         category: "Poor",
         title: "There Are Many Variations Qassages Poor",
         description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
         progressPercent: 85,
         goalAmount: "$23,000",
         donatedAmount: "$9,000",
         detailsLink: "/donations-details",
      },
      {
         id: 2,
         accentColor: "#ff5528",
         image: donationImage2,
         category: "Raised",
         title: "It is a long established fact that a reader",
         description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
         progressPercent: 80,
         goalAmount: "$13,000",
         donatedAmount: "$5,000",
         detailsLink: "/donations-details",
      },
      {
         id: 3,
         accentColor: "#8742e8",
         image: donationImage3,
         category: "Medical",
         title: "We Can Aenean Poor leo Nec This Enovation.",
         description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
         progressPercent: 72,
         goalAmount: "$89,000",
         donatedAmount: "$6,000",
         detailsLink: "/donations-details",
      },
      {
         id: 4,
         accentColor: "#44c895",
         image: donationImage4,
         category: "Education",
         title: "Let’s Education for Children Good Future Life.",
         description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
         progressPercent: 90,
         goalAmount: "$29,000",
         donatedAmount: "$7,000",
         detailsLink: "/donations-details",
      },
   ],
   footerText: "We Give Donations Poor People Impact on Someone’s Life.",
   footerButtonText: "Donate Now",
   footerButtonLink: "/donate",
};
