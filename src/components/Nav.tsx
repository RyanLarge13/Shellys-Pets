import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

import Logo from "../assets/images/logo-trans-vert.png";

const Nav = ({
  setShowNav,
}: {
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.nav
      initial={{ x: -25, backgroundColor: "rgba(255,255,255,0)" }}
      animate={{ x: 0, backgroundColor: "rgba(255,255,255,0.9)" }}
      exit={{ x: 25, backgroundColor: "rgba(255,255,255,0)" }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-white backdrop-blur-md z-10 py-20 flex flex-col justify-between items-center"
    >
      <ul className="flex flex-col justify-center items-center w-full">
        <li className="w-full text-center">
          <a
            href="#"
            className="py-10 block hover:bg-purple-100 duration-200 w-full"
          >
            Home
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#"
            className="py-10 block hover:bg-purple-100 duration-200 w-full"
          >
            Services
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#"
            className="py-10 block hover:bg-purple-100 duration-200 w-full"
          >
            Contact
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#"
            className="py-10 block hover:bg-purple-100 duration-200 w-full"
          >
            About
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#"
            className="py-10 block hover:bg-purple-100 duration-200 w-full"
          >
            Pricing
          </a>
        </li>
      </ul>
      <button onClick={() => setShowNav(false)}>
        <img src={Logo} alt="Shelly's pets awesome logo" className="h-20" />
      </button>
    </motion.nav>
  );
};

export default Nav;
