import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PiPawPrintFill } from "react-icons/pi";

import DogBeingWashed from "./assets/images/dog-getting-washed.png";
import GroupOfDogs from "./assets/images/group-of-dogs.png";
import Logo from "./assets/images/logo-trans-hor.png";
import Nav from "./components/Nav";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <main className="md:px-10 lg:px-20 xl:px-40 overflow-x-clip">
      {/* Advertisement div */}
      <div
        aria-roledescription="advertisement"
        role="none"
        className="bg-purple-500 text-center p-1"
      >
        <p className="text-white font-bold text-[70%]">
          50/50 Deal!!! Order your first service over $50 and get 50% off today!
        </p>
      </div>

      <header className="flex justify-between items-center sticky top-0 right-0 left-0 bg-purple-100 z-10">
        <img src={Logo} alt="shelly's pets awesome logo" className="h-14" />
        <button
          className="p-5 hover:text-purple-500 duration-200"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <PiPawPrintFill />
        </button>
      </header>
      <AnimatePresence>
        {showNav ? <Nav setShowNav={setShowNav} /> : null}
      </AnimatePresence>

      <img src={GroupOfDogs} alt="dogs in a group" className="" />

      <p className="py-10 px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem
        quisquam ducimus doloribus nihil ratione eaque, fugit quasi, alias
        excepturi soluta eius. Modi dignissimos sed corrupti, quos animi facilis
        reiciendis!
      </p>

      <p className="px-5 pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        exercitationem obcaecati illum autem accusamus sequi necessitatibus
        dicta cupiditate aspernatur earum porro fuga saepe.
      </p>

      <button className="bg-purple-500 outline-1 outline-gray-200 text-white w-full font-bold hover:bg-purple-100 hover:text-black duration-200 p-5">
        Services
      </button>

      <img src={DogBeingWashed} alt="Dog being washed" className="" />
    </main>
  );
};

export default App;
