// Import images
import donationImage from "~/assets/images/resources/donation-details.jpg";
import additionalImage1 from "~/assets/images/resources/donation-details-2.jpg";
import additionalImage2 from "~/assets/images/resources/donation-details-3.jpg";
import authorImage from "~/assets/images/resources/author-1-1.jpg";
import campaignImage1 from "~/assets/images/donation/rc-1-1.jpg";
import campaignImage2 from "~/assets/images/donation/rc-1-2.jpg";
import campaignImage3 from "~/assets/images/donation/rc-1-3.jpg";

export const donationDetails = {
   image: donationImage,
   alt: "careox",
   percent: 85,
   goals: 13000,
   donated: 5000,
   text1: "Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor in some form.Lorem Ipsum is simply dummy text of the printing and industry has been the industry’s standard dummy text ever since the 1500s, when this poor man an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
   text2: "The Poor address a range of simply application and infrastructure this of passages of available, majority have suffered poor in some form.Lorem Ipsum is simply dummy text of the printing industry has been the industry’s standard dummy text ever since the",
   summaryTitle: "Poor Summary :",
   summaryText: "The Poor address a range of simply application and infrastructure this of passages of available, majority have suffered poor in some form.Lorem Ipsum is simply dummy text.",
   additionalImages: [additionalImage1, additionalImage2],
   listItems: ["We help companies develop powerful corporate social Responsibility.", "Helped fund 3,265 Project powerful corporate poor."],
};

export const author = {
   name: "Phillip Haris",
   designation: "Founder",
   date: "Sep 2024",
   category: "Environment",
   location: "London, Canada",
   image: authorImage,
};

export const recentCampaigns = [
   {
      image: campaignImage1,
      date: "Aug 10, 2023",
      title: "We Can Aenean Poor leo Nec This.",
      link: "/donations-details",
   },
   {
      image: campaignImage2,
      date: "Aug 10, 2023",
      title: "Get Poor Money Strang People.",
      link: "/donations-details",
   },
   {
      image: campaignImage3,
      date: "Aug 10, 2023",
      title: "Medical Health or People React.",
      link: "/donations-details",
   },
];

export const socialLinks = [
   { name: "Facebook", icon: "fab fa-facebook-f", color: "#ffa415", link: "https://facebook.com" },
   { name: "Twitter", icon: "fab fa-twitter", color: "#fc5528", link: "https://twitter.com" },
   { name: "Pinterest", icon: "fab fa-pinterest-p", color: "#8139e7", link: "https://pinterest.com" },
   { name: "Instagram", icon: "fab fa-instagram", color: "#44c895", link: "https://instagram.com" },
];
