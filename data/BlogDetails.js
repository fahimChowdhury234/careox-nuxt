// blogDetails.js
import img from "@/assets/images/blog/blog-details-1-1.jpg";
import author from "@/assets/images/blog/blog-author-1-1.jpg";
import commentAuthor from "@/assets/images/blog/blog-comment-1-1.jpg";
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
export const blogDetails = {
   image: {
      src: img,
      alt: "careox",
   },
   meta: {
      category: "Charity",
      categoryLink: "/blog-grid",
      author: {
         name: "Admin: Lorat",
         imageSrc: author,
         link: "/blog-list-right",
      },
      commentsCount: 5,
      date: "02 Sep 2024",
   },
   title: "The Charity for Orphans leading provider of Country Development, Start a Fundraiser for Poor Yourself.",
   content: [
      `There are many variations of passages agency we have covered many special events such as fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and business results.`,
      `There are many variations of passages agency we have covered many special events such as fireworks, fairs, parades, races, walks, a Lorem Ipsum.`,
      `This are many variations of passages agency we have covered many special events such as fireworks, fairs, parades, races, walks, a Lorem Ipsumpassages agency we have covered fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte.`,
   ],
   tags: ["Beauty", "Massage"],
   socialLinks: [
      {
         name: "Facebook",
         iconClass: "fab fa-facebook-f",
         url: "https://facebook.com",
         color: "#ffa415",
      },
      {
         name: "Twitter",
         iconClass: "fab fa-twitter",
         url: "https://twitter.com",
         color: "#fc5528",
      },
      {
         name: "Pinterest",
         iconClass: "fab fa-pinterest-p",
         url: "https://pinterest.com",
         color: "#8139e7",
      },
      {
         name: "Instagram",
         iconClass: "fab fa-instagram",
         url: "https://instagram.com",
         color: "#44c895",
      },
   ],
   comments: [
      {
         id: 1,
         authorName: "Kevin Martin",
         authorImage: commentAuthor,
         date: "March 20, 2023 at 1:37 pm",
         text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
      },
      {
         id: 2,
         authorName: "Sarah Albert",
         authorImage: commentAuthor,
         date: "March 20, 2023 at 2:37 pm",
         text: "Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.",
      },
   ],
};
