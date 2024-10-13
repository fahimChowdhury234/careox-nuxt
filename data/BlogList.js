import blogImage1 from "@/assets/images/blog/blog-l-1-1.jpg";
import blogImage2 from "@/assets/images/blog/blog-l-1-2.jpg";
import blogImage3 from "@/assets/images/blog/blog-l-1-3.jpg";
import blogImage4 from "@/assets/images/blog/blog-l-1-4.jpg";
import authorImage from "@/assets/images/blog/blog-author-1-1.jpg";
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
export const blogList = [
   {
      image: blogImage1,
      imageAlt: "The Charity for Orphans leading provider of Country Development",
      link: "/blog-details-right",
      category: "Charity",
      authorImage: authorImage,
      author: "Lorat",
      comments: 5,
      date: "02 Sep 2024",
      title: "The Charity for Orphans leading provider of Country Development",
      description: "There are many variations of passages agency we have covered many special events...",
      accentColor: "#ffa415",
      duration: "1500ms",
      delay: "00ms",
   },
   {
      image: blogImage2,
      imageAlt: "Why to Support Poor Leading Provider of Country Development",
      link: "/blog-details-right",
      category: "Charity",
      authorImage: authorImage,
      author: "Lorat",
      comments: 5,
      date: "02 Sep 2024",
      title: "Why to Support Poor Leading Provider of Country Development",
      description: "There are many variations of passages agency we have covered many special events...",
      accentColor: "#ff5528",
      duration: "1500ms",
      delay: "50ms",
   },
   {
      image: blogImage3,
      imageAlt: "There are Many Variations of Passages of Available",
      link: "/blog-details-right",
      category: "Charity",
      authorImage: authorImage,
      author: "Lorat",
      comments: 5,
      date: "02 Sep 2024",
      title: "There are Many Variations of Passages of Available",
      description: "There are many variations of passages agency we have covered many special events...",
      accentColor: "#8139e7",
      duration: "1500ms",
      delay: "100ms",
   },
   {
      image: blogImage4,
      imageAlt: "Why to Support Poor Leading Provider of Country Development",
      link: "/blog-details-right",
      category: "Charity",
      authorImage: authorImage,
      author: "Lorat",
      comments: 5,
      date: "02 Sep 2024",
      title: "Why to Support Poor Leading Provider of Country Development",
      description: "There are many variations of passages agency we have covered many special events...",
      accentColor: "#44c895",
      duration: "1500ms",
      delay: "100ms",
   },
];
