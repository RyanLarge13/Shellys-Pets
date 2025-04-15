import { FaCheckCircle } from "react-icons/fa";

import DogBeingWashed from "../assets/images/dog-getting-washed.png";

const Section1 = () => {
  return (
    <section id="about"  className="lg:flex lg:flex-row-reverse lg:min-h-screen lg:p-40 relative min-h-screen">
      <div className="absolute w-[600px] h-[300px] lg:h-[600px] bg-purple-300 top-0 right-0 z-[-1]"></div>
      <div className="relative">
        <img
          src={DogBeingWashed}
          alt="Dog being washed"
          className="max-h-[500px] aspect-square rounded-md shadow-md"
        />
        <div className="h-40 w-3 rounded-full bg-purple-500 absolute left-0 top-[50%] translate-x-[-50%]"></div>
      </div>

      <div className="flex-1 p-10">
        <p>WHERE YOUR PET IS CARED FOR</p>
        <h2 className="text-3xl mt-3 font-bold text-purple-500">
          About Shelly's Pets
        </h2>
        <p className="max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          doloribus ducimus harum? Id, aliquid doloremque veniam magnam eligendi
          minima repellendus dicta velit dolorum accusamus unde nostrum
          consectetur sit, dolorem est!
        </p>
        <ul className="mt-3">
          <li className="flex justify-start items-center">
            <FaCheckCircle className="text-purple-500 mr-5" />{" "}
            <p>Low Cost Care</p>
          </li>
          <li className="flex justify-start items-center">
            <FaCheckCircle className="text-purple-500 mr-5" />{" "}
            <p>Quality & Speed</p>
          </li>
          <li className="flex justify-start items-center">
            <FaCheckCircle className="text-purple-500 mr-5" />{" "}
            <p>Local Business</p>
          </li>
        </ul>
        <a href="contact" className="bg-purple-500 flex mt-10 w-full justify-center items-center outline-black outline-3 text-white font-bold hover:bg-purple-100 hover:text-black duration-200 p-5 lg:max-w-[300px] lg:mt-10">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Section1;
