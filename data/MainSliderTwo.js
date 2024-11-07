// Import all images first
import bgImage1 from "@/assets/images/backgrounds/slider-2-1.jpg";
import bgImage2 from "@/assets/images/backgrounds/slider-2-2.jpg";
import bgImage3 from "@/assets/images/backgrounds/slider-2-3.jpg";

import shape1 from "@/assets/images/shapes/slider-2-shape-1.png";
import shape2 from "@/assets/images/shapes/slider-2-shape-2.png";
import shape3 from "@/assets/images/shapes/slider-2-shape-3.png";

import volunteerImage1 from "@/assets/images/resources/volunteer-image-1.png";
import volunteerImage2 from "@/assets/images/resources/volunteer-image-2.png";
import volunteerImage3 from "@/assets/images/resources/volunteer-image-3.png";

// Define slider data
export const sliderData = {
   videoUrl: "https://www.youtube.com/watch?v=h9MbznbxlLc",
   data: [
      {
         background: bgImage1,
         shapeOne: shape1,
         shapeTwo: shape2,
         shapeThree: shape3,
         volunteerImages: [volunteerImage1, volunteerImage2, volunteerImage3],
      },
      {
         background: bgImage2,
         shapeOne: shape1,
         shapeTwo: shape2,
         shapeThree: shape3,
         volunteerImages: [volunteerImage1, volunteerImage2, volunteerImage3],
      },
      {
         background: bgImage3,
         shapeOne: shape1,
         shapeTwo: shape2,
         shapeThree: shape3,
         volunteerImages: [volunteerImage1, volunteerImage2, volunteerImage3],
      },
   ],
};
