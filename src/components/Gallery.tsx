import Masonry from "react-masonry-css";

import { DogBrush1, DogBrush2, DogsRunningAtPark } from "../assets/gallery/index.ts";
import DogsAtBuff from "../assets/images/buffalo-dog-walker.png";
import Business from "../assets/images/business.png";
import DogsAtPark from "../assets/images/dogs-at-park.png";

const breakpointColumnsObj = {
  default: 3,
  1100: 4,
  700: 3,
  500: 2,
};

const Gallery = () => {
  return (
    <section id="news" className="pt-20 bg-purple-100">
      <p className="text-center">FROM THE NEIGHBORHOOD</p>
      <h2 className="font-bold text-4xl text-center mt-3 text-purple-500 mb-40">
        Gallery
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <img src={DogBrush2} alt="dogs" />
        <img src={DogsAtBuff} alt="dogs" />
        <img src={Business} alt="dogs" />
        <img src={DogsAtPark} alt="dogs" />
        <img src={DogsRunningAtPark} alt="dogs" />
        <img src={DogBrush1} alt="dogs" />
      </Masonry>
    </section>
  );
};

export default Gallery;
