// Import images
import galleryImage1 from "@/assets/images/gallery/gallery-1-1.jpg";
import galleryImage2 from "@/assets/images/gallery/gallery-1-2.jpg";
import galleryImage3 from "@/assets/images/gallery/gallery-1-3.jpg";
import galleryImage4 from "@/assets/images/gallery/gallery-1-4.jpg";
import galleryImage5 from "@/assets/images/gallery/gallery-1-5.jpg";
import galleryImage6 from "@/assets/images/gallery/gallery-1-6.jpg";
import galleryImage7 from "@/assets/images/gallery/gallery-1-7.jpg";
import galleryImage8 from "@/assets/images/gallery/gallery-1-8.jpg";
import galleryImage9 from "@/assets/images/gallery/gallery-1-9.jpg";
import galleryImage10 from "@/assets/images/gallery/gallery-1-10.jpg";

export const filterCategories = [
   { name: "All", filterClass: "filter-item" },
   { name: "Photography", filterClass: "photography" },
   { name: "Design", filterClass: "design" },
   { name: "Branding", filterClass: "branding" },
   { name: "Development", filterClass: "development" },
];

export const galleryFilterData = [
   {
      id: 1,
      image: galleryImage1,
      filterClasses: ["design"],
      xl: 3,
      md: 6,
      title: "Project 1",
      category: "Design",
      link: "#",
   },
   {
      id: 2,
      image: galleryImage2,
      filterClasses: ["photography"],
      xl: 3,
      md: 6,
      title: "Project 2",
      category: "Photography",
      link: "#",
   },
   {
      id: 3,
      image: galleryImage3,
      filterClasses: ["design"],
      xl: 3,
      md: 6,
      title: "Project 3",
      category: "Design",
      link: "#",
   },
   {
      id: 4,
      image: galleryImage4,
      filterClasses: ["photography"],
      xl: 3,
      md: 6,
      title: "Project 4",
      category: "Photography",
      link: "#",
   },
   {
      id: 5,
      image: galleryImage5,
      filterClasses: ["branding"],
      xl: 3,
      md: 6,
      title: "Project 5",
      category: "Branding",
      link: "#",
   },
   {
      id: 6,
      image: galleryImage6,
      filterClasses: ["photography", "branding"],
      xl: 3,
      md: 6,
      title: "Project 6",
      category: "Photography, Branding",
      link: "#",
   },
   {
      id: 7,
      image: galleryImage7,
      filterClasses: ["design"],
      xl: 3,
      md: 6,
      title: "Project 7",
      category: "Design",
      link: "#",
   },
   {
      id: 8,
      image: galleryImage8,
      filterClasses: ["development"],
      xl: 3,
      md: 6,
      title: "Project 8",
      category: "Development",
      link: "#",
   },
   {
      id: 9,
      image: galleryImage9,
      filterClasses: ["photography"],
      xl: 6,
      md: 6,
      title: "Project 9",
      category: "Photography",
      link: "#",
   },
   {
      id: 10,
      image: galleryImage10,
      filterClasses: ["development"],
      xl: 3,
      md: 6,
      title: "Project 10",
      category: "Development",
      link: "#",
   },
];
