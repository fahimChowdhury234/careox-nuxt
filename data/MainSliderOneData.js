// Import images first
import mainBg from "@/assets/images/backgrounds/slider-1-1.jpg";
import bgImage1 from "@/assets/images/backgrounds/slider-1-layer-1.jpg";
import bgImage2 from "@/assets/images/backgrounds/slider-1-layer-2.jpg";
import bgImage3 from "@/assets/images/backgrounds/slider-1-layer-3.jpg";
import layerImage from "@/assets/images/shapes/slider-1-layer-bg.png";

import shape1 from "@/assets/images/shapes/slider-1-shape-1.png";
import shape2 from "@/assets/images/shapes/slider-1-shape-2.png";
import shape3 from "@/assets/images/shapes/slider-1-shape-3.png";
import shape4 from "@/assets/images/shapes/slider-1-shape-4.png";
import arrow from "@/assets/images/shapes/slider-1-arrow.png";
import hand from "@/assets/images/shapes/slider-1-hand.png";

const sliderData = [
   {
      id: 1,
      mainBg: mainBg,
      bgImage: bgImage1,
      layerImage: layerImage,
      title: "Give Child Poor <br> Gift Helping Now.",
      text: "Poor can only be as strong as our people & because of team <br> have designed game-changing products.",
      videoLink: "https://www.youtube.com/watch?v=h9MbznbxlLc",
      shapes: [shape1, shape2, shape3, shape4, arrow, hand],
   },
   {
      id: 2,
      mainBg: mainBg,
      bgImage: bgImage2,
      layerImage: layerImage,
      title: "Give Child Poor <br> Gift Helping Now.",
      text: "Poor can only be as strong as our people & because of team <br> have designed game-changing products.",
      videoLink: "https://www.youtube.com/watch?v=h9MbznbxlLc",
      shapes: [shape1, shape2, shape3, shape4, arrow, hand],
   },
   {
      id: 3,
      mainBg: mainBg,
      bgImage: bgImage3,
      layerImage: layerImage,
      title: "Give Child Poor <br> Gift Helping Now.",
      text: "Poor can only be as strong as our people & because of team <br> have designed game-changing products.",
      videoLink: "https://www.youtube.com/watch?v=h9MbznbxlLc",
      shapes: [shape1, shape2, shape3, shape4, arrow, hand],
   },
];

export default sliderData;
