// Import images at the top
import blogImage1 from "~/assets/images/blog/blog-1-1.jpg";
import blogImage2 from "~/assets/images/blog/blog-1-2.jpg";
import blogImage3 from "~/assets/images/blog/blog-1-3.jpg";
import authorImage from "~/assets/images/blog/blog-author-1-1.jpg";

export const blogData = {
   sectionTitle: {
      tagline: "News & articles",
      title: "We Articles From Blog News and Story",
   },
   blogs: [
      {
         id: 1,
         title: "We Can Aenean Poor to Help This People in Needleo Blog.",
         date: "02 Sep 2024",
         author: "Lorat",
         authorImage: authorImage,
         comments: 5,
         content: "We poor standard chunk nibh velit majority suffered alteration in some form aliquet sollic tudin.",
         image: blogImage1,
         link: "/blog-details-right",
      },
      {
         id: 2,
         title: "Our Donation is Hope for Poor Childrens.",
         date: "02 Sep 2024",
         author: "Lorat",
         authorImage: authorImage,
         comments: 5,
         content: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
         image: blogImage2,
         link: "/blog-details-right",
      },
      {
         id: 3,
         title: "Help This People in Needleo Blog.",
         date: "02 Sep 2024",
         author: "Lorat",
         authorImage: authorImage,
         comments: 5,
         content: "We poor standard chunk ofI nibh velit auctor aliquet sollic tudin.",
         image: blogImage3,
         link: "/blog-details-right",
      },
   ],
};
