// BlogGrid.js
import blogImage1 from "~/assets/images/blog/blog-2-1.jpg";
import blogImage2 from "~/assets/images/blog/blog-2-2.jpg";
import blogImage3 from "~/assets/images/blog/blog-2-3.jpg";
import blogImage4 from "~/assets/images/blog/blog-2-6.jpg";
import blogImage5 from "~/assets/images/blog/blog-2-7.jpg";
import blogImage6 from "~/assets/images/blog/blog-2-8.jpg";
import authorImage from "~/assets/images/blog/blog-author-1-1.jpg";
import post1 from "@/assets/images/blog/lp-1-1.jpg";
import post2 from "@/assets/images/blog/lp-1-2.jpg";
import post3 from "@/assets/images/blog/lp-1-3.jpg";

export const sidebarData = {
   categories: [
      { href: "/blog-grid", text: "Business", count: 8 },
      { href: "/blog-grid", text: "Ui/Ux Design", count: 14 },
      { href: "/blog-grid", text: "Professional", count: 12 },
      { href: "/blog-grid", text: "Technology", count: 23 },
      { href: "/blog-grid", text: "Development", count: 17 },
      { href: "/blog-grid", text: "Web Design", count: 22 },
   ],
   tags: [
      { href: "/blog-grid", text: "Design" },
      { href: "/blog-grid", text: "Service" },
      { href: "/blog-grid", text: "Top" },
      { href: "/blog-grid", text: "Help" },
      { href: "/blog-grid", text: "New" },
      { href: "/blog-grid", text: "Best" },
      { href: "/blog-grid", text: "Beauty" },
      { href: "/blog-grid", text: "Sounds" },
   ],
   recentPosts: [
      {
         image: { src: post1, alt: "tolak" },
         date: "Aug 10, 2023",
         title: "We play chimney pot Chip bonne.",
         href: "/blog-details-right",
      },
      {
         image: { src: post2, alt: "tolak" },
         date: "Aug 10, 2023",
         title: "Get deep knowledge your beauty",
         href: "/blog-details-right",
      },
      {
         image: { src: post3, alt: "tolak" },
         date: "Aug 10, 2023",
         title: "We round solution of york blog",
         href: "/blog-details-right",
      },
   ],
};
export const blogPosts = [
   {
      id: 1,
      title: "There are Many Variations of Available",
      date: "02 Sep 2024",
      image: blogImage1,
      authorImage: authorImage,
      author: "Lorat",
      commentCount: 5,
      link: "/blog-details-right",
      accentColor: "#ffa415",
      description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
   },
   {
      id: 2,
      title: "Majority have Suffered Alteration Some",
      date: "02 Sep 2024",
      image: blogImage2,
      authorImage: authorImage,
      author: "Lorat",
      commentCount: 5,
      link: "/blog-details-right",
      accentColor: "#ff5528",
      description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
   },
   {
      id: 3,
      title: "It is a long Established Fact a Reader",
      date: "02 Sep 2024",
      image: blogImage3,
      authorImage: authorImage,
      author: "Lorat",
      commentCount: 5,
      link: "/blog-details-right",
      accentColor: "#8139e7",
      description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
   },
   {
      id: 4,
      title: "My Supervisor Didn't Like the Latest",
      date: "02 Sep 2024",
      image: blogImage4,
      authorImage: authorImage,
      author: "Lorat",
      commentCount: 5,
      link: "/blog-details-right",
      accentColor: "#44c895",
      description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
   },
   {
      id: 5,
      title: "Help This People in Needleo Blog.",
      date: "02 Sep 2024",
      image: blogImage5,
      authorImage: authorImage,
      author: "Lorat",
      commentCount: 5,
      link: "/blog-details-right",
      accentColor: "#d340c3",
      description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
   },
   {
      id: 6,
      title: "Our Donation is Hope for Poor Childrens.",
      date: "02 Sep 2024",
      image: blogImage6,
      authorImage: authorImage,
      author: "Lorat",
      commentCount: 5,
      link: "/blog-details-right",
      accentColor: "#399be7",
      description: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
   },
];
