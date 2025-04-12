import BathingDog from "../assets/images/bathing-dog-2.png";
import WalkingDogs from "../assets/images/dog-walking.png";
import GroomerTools from "../assets/images/groomer-tools.png";

const Section2 = () => {
  return (
    <section className="md:px-20 lg:px-40 bg-white text-center">
      <p>What Do We Do</p>
      <p className="text-3xl mb-20 mt-5">The Best Care For Our Best Friends</p>
      <div className="flex flex-col justify-evenly items-center">
        <div>
          <img
            src={GroomerTools}
            alt="Groomer Tools"
            className="w-full aspect-square object-cover"
          />
        </div>
        <div>
          <img
            src={BathingDog}
            alt="Groomer Tools"
            className="w-full aspect-square object-cover"
          />
        </div>
        <div>
          <img
            src={WalkingDogs}
            alt="Groomer Tools"
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
