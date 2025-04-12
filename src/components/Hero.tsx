import GroupOfDogs from "../assets/images/group-of-dogs.png";
import HeartPaw from "../assets/images/heart-paw.svg";
import Heart from "../assets/images/heart.svg";

const Hero = () => {
  return (
    <section className="lg:flex justify-center items-center bg-purple-100">
      <img
        src={GroupOfDogs}
        alt="dogs in a group"
        className="mx-auto lg:max-h-screen"
      />

      <div className="flex-1 lg:min-h-screen lg:flex lg:flex-col justify-center items-center">
        <div className="px-5">
          <div className="py-10 px-5 max-w-[400px] text-center mx-auto bg-purple-300 shadow-md rounded-md mt-5 relative">
            <p>
              <span className="text-4xl text-white font-bold">Low Income</span>
              <br />
              <span className="text-4xl text-white font-bold">Low Cost</span>
              <br />
              Welcome to Shelly's Pets where you will find the care and love you
              have been looking for
            </p>

            <img
              src={HeartPaw}
              alt="Paw and heart"
              className="absolute top-[-30px] left-[-20px]"
            />
          </div>

          <div className="relative px-5 max-w-[400px] mx-auto bg-gray-100 bg-opacity-40 backdrop-blur-md shadow-md rounded-md py-10 md:translate-y-[-30px] md:translate-x-[-50px] mb-10 mt-5 md:mt-0">
            <p>
              Buffalo locals!! You are only a few minutes away from giving your
              furry friend the attention and care that they deserve
            </p>
            <img
              src={Heart}
              alt="Heart"
              className="absolute right-[-15px] bottom-[-25px]"
            />
          </div>
        </div>

        <button className="bg-purple-500 outline-1 outline-gray-200 text-white w-full font-bold hover:bg-purple-100 hover:text-black duration-200 p-5 lg:max-w-[300px] lg:mt-10">
          Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
