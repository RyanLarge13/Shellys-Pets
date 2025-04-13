import { FaHeart, FaUser } from "react-icons/fa";

import DogsAtPark from "../assets/images/dogs-at-park.png";

const Section4 = () => {
  return (
    <section className="py-20 bg-purple-100">
      <p className="text-center">FROM THE BLOG</p>
      <h2 className="font-bold text-4xl text-center mt-3 text-purple-500">
        News & Articles
      </h2>

      <div className="flex flex-col gap-y-10 justify-center items-center mt-10 p-3 md:flex-row md:gap-x-20 md:px-40 md:pt-0">
        <div className="rounded-md shadow-md translate-y-[200px] overflow-hidden">
          <img src={DogsAtPark} alt="blog-img" className="object-cover" />
          <div className="h-full bg-white p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="flex justify-start items-center gap-x-2">
                <FaUser />
                <p>Jake Lawrence</p>
              </div>
              <div className="flex justify-end items-center gap-x-2">
                <FaHeart className="text-red-400" />
                <p>1000</p>
              </div>
            </div>
            <p className="font-bold text-lg">Latest Project</p>
            <p>
              Recently we have been trying to expand to reach a greater portion
              of the Buffalo metro area
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md translate-y-[200px] overflow-hidden">
          <img src={DogsAtPark} alt="blog-img" className="object-cover" />
          <div className="h-full bg-white p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="flex justify-start items-center gap-x-2">
                <FaUser />
                <p>Jake Lawrence</p>
              </div>
              <div className="flex justify-end items-center gap-x-2">
                <FaHeart className="text-red-400" />
                <p>1000</p>
              </div>
            </div>
            <p className="font-bold text-lg">Latest Project</p>
            <p>
              Recently we have been trying to expand to reach a greater portion
              of the Buffalo metro area
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md translate-y-[200px] overflow-hidden">
          <img src={DogsAtPark} alt="blog-img" className="object-cover" />
          <div className="h-full bg-white p-5">
            <div className="flex justify-between items-center mb-3">
              <div className="flex justify-start items-center gap-x-2">
                <FaUser />
                <p>Jake Lawrence</p>
              </div>
              <div className="flex justify-end items-center gap-x-2">
                <FaHeart className="text-red-400" />
                <p>1000</p>
              </div>
            </div>
            <p className="font-bold text-lg">Latest Project</p>
            <p>
              Recently we have been trying to expand to reach a greater portion
              of the Buffalo metro area
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
