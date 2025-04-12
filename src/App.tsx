import { useState } from "react";
import { FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import { PiPawPrintFill } from "react-icons/pi";

import Logo from "./assets/images/logo-trans-hor.png";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <main className="overflow-x-clip">
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

      <header className="flex justify-between items-center sticky top-0 right-0 left-0 bg-purple-100 z-10 shadow-sm">
        <img src={Logo} alt="shelly's pets awesome logo" className="h-14" />
        <Nav showNav={showNav} setShowNav={setShowNav} />
        <button
          className="p-5 hover:text-purple-500 duration-200 md:hidden"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <PiPawPrintFill />
        </button>
        <div className="hidden md:flex justify-center items-center flex-shrink mr-2">
          <button className="p-2">
            <FaSearch />
          </button>
          <button className="p-2">
            <FaFacebook />
          </button>
          <button className="p-2">
            <FaInstagram />
          </button>
        </div>
      </header>

      <Hero />

      <Section1 />
    </main>
  );
};

export default App;
