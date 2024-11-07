const navItems = [
   {
      id: 1,
      name: "About",
      href: "/about",
   },
   {
      id: 2,
      name: "Pages",
      subItems: [
         {
            id: 1,
            name: "Events",
            dropdown: true,
            subItems: [
               { id: 1, name: "Events", href: "/events" },
               { id: 2, name: "Events Carousel", href: "/events-carousel" },
               { id: 3, name: "Event Details", href: "/event-details" },
            ],
         },
         {
            id: 2,
            name: "Volunteer",
            dropdown: true,
            subItems: [
               { id: 1, name: "Our Volunteer", href: "/team" },
               { id: 2, name: "Volunteer Carousel", href: "/team-carousel" },
               { id: 3, name: "Volunteer Details", href: "/team-details" },
            ],
         },
         { id: 3, name: "Become A Volunteer", href: "/become-a-volunteer" },
         { id: 4, name: "Testimonials", href: "/reviews" },
         { id: 5, name: "Testimonials Carousel", href: "/reviews-carousel" },
         { id: 6, name: "Pricing", href: "/packages" },
         { id: 7, name: "Pricing Carousel", href: "/packages-carousel" },
         {
            id: 8,
            name: "Gallery",
            dropdown: true,
            subItems: [
               { id: 1, name: "Gallery Masonry", href: "/gallery" },
               { id: 2, name: "Gallery Filter", href: "/gallery-filter" },
               { id: 3, name: "Gallery Grid", href: "/gallery-grid" },
               { id: 4, name: "Gallery Carousel", href: "/gallery-carousel" },
            ],
         },
         { id: 9, name: "FAQs", href: "/faq" },
         { id: 10, name: "Login", href: "/login" },
         { id: 11, name: "Register", href: "/register" },
         { id: 12, name: "404 Error", href: "/404" },
      ],
   },
   {
      id: 3,
      name: "Donations",
      subItems: [
         {
            id: 1,
            name: "Donations Grid",
            dropdown: true,
            subItems: [
               { id: 1, name: "Donations 01", href: "/donations-one" },
               { id: 2, name: "Donations 02", href: "/donations-two" },
               { id: 3, name: "Donations 03", href: "/donations-three" },
            ],
         },
         {
            id: 2,
            name: "Donations Carousel",
            dropdown: true,
            subItems: [
               { id: 1, name: "Donations 01", href: "/donations-four" },
               { id: 2, name: "Donations 02", href: "/donations-five" },
               { id: 3, name: "Donations 03", href: "/donations-six" },
            ],
         },
         { id: 3, name: "Donations Details", href: "/donations-details" },
         { id: 4, name: "Donate Now", href: "/donate" },
      ],
   },
   {
      id: 4,
      name: "Shop",
      subItems: [
         {
            id: 1,
            name: "Products",
            dropdown: true,
            subItems: [
               { id: 1, name: "No Sidebar", href: "/products" },
               { id: 2, name: "Left Sidebar", href: "/products-left" },
               { id: 3, name: "Right Sidebar", href: "/products-right" },
            ],
         },
         { id: 2, name: "Products Carousel", href: "/products-carousel" },
         { id: 3, name: "Product Details", href: "/product-details" },
         { id: 4, name: "Cart", href: "/cart" },
         { id: 5, name: "Checkout", href: "/checkout" },
      ],
   },
   {
      id: 5,
      name: "News",
      subItems: [
         {
            id: 1,
            name: "News Grid",
            dropdown: true,
            subItems: [
               { id: 1, name: "No Sidebar", href: "/blog-grid" },
               { id: 2, name: "Left Sidebar", href: "/blog-grid-left" },
               { id: 3, name: "Right Sidebar", href: "/blog-grid-right" },
            ],
         },
         {
            id: 2,
            name: "News List",
            dropdown: true,
            subItems: [
               { id: 1, name: "No Sidebar", href: "/blog-list" },
               { id: 2, name: "Left Sidebar", href: "/blog-list-left" },
               { id: 3, name: "Right Sidebar", href: "/blog-list-right" },
            ],
         },
         { id: 3, name: "News Carousel", href: "/blog-carousel" },
         {
            id: 4,
            name: "News Details",
            dropdown: true,
            subItems: [
               { id: 1, name: "No Sidebar", href: "/blog-details" },
               { id: 2, name: "Left Sidebar", href: "/blog-details-left" },
               { id: 3, name: "Right Sidebar", href: "/blog-details-right" },
            ],
         },
      ],
   },
   {
      id: 6,
      name: "Contact",
      href: "/contact",
   },
];

export default navItems;
