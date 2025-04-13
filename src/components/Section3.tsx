import Person from "../assets/images/person.svg";

const Section3 = () => {
  return (
    <section className="bg-purple-100 py-20 p-5 flex justify-center items-center flex-col">
      <p className="text-center">OUR TESTIMONIALS</p>
      <h2 className="font-bold text-4xl text-center mt-3 text-purple-500">
        What They're Talking About
      </h2>
      <div className="mt-10 md:flex md:mt-20 md:gap-x-10 justify-center items-center">
        <img src={Person} alt="person" />
        <div className="mt-5 ml-3">
          <p className="max-w-[400px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            in, laudantium, quae enim facere dolor sunt nisi optio ducimus
            aliquid architecto excepturi. Deleniti nobis iure sequi sint
            doloremque rem consequatur!
          </p>
          <p className="text-purple-500 font-semibold">Tyrese Gibson</p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
