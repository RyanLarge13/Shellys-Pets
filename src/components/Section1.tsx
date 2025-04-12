import DogBeingWashed from "../assets/images/dog-getting-washed.png";

const Section1 = () => {
  return (
    <section className="lg:flex lg:flex-row-reverse lg:min-h-screen lg:p-40 relative">
      <div className="absolute w-[600px] h-[600px] bg-purple-300 top-0 right-0 z-[-1]"></div>
      <div className="relative">
        <img
          src={DogBeingWashed}
          alt="Dog being washed"
          className="max-h-[500px] aspect-square rounded-md shadow-md"
        />
        <div className="h-40 w-3 rounded-full bg-purple-500 absolute left-0 top-[50%] translate-x-[-50%]"></div>
        <div className="bg-purple-100 p-5 absolute right-10 left-10 bottom-[-20px] rounded-md shadow-md">
          <p>Wash, Comb, Pet, Love</p>
        </div>
      </div>

      <div className="flex-1 p-10">
        <p>Where Your Pet Is Cared For</p>
        <h2 className="text-3xl mt-3 font-bold text-purple-300">
          About Shelly's Pets
        </h2>
        <div className="flex justify-center items-center gap-x-5"></div>
      </div>
    </section>
  );
};

export default Section1;
