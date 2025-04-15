import { Dispatch, SetStateAction } from "react";

import Logo from "../assets/images/logo-trans-vert.png";

const Nav = ({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav
      className={`fixed top-0 right-0 left-0 bottom-0 bg-white duration-200 z-10 py-20 flex flex-col justify-between items-center md:relative md:opacity-100 md:py-0 md:bg-transparent ${
        showNav
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
      }`}
    >
      <ul className="flex flex-col justify-center items-center w-full md:flex-row">
        <li className="w-full text-center">
          <a
            href="#main"
            onClick={() => setShowNav(false)}
            className="py-10 block duration-200 w-full md:py-2 md:px-5 hover:bg-purple-500 hover:text-white md:hover:translate-y-[10px]"
          >
            Home
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#about"
            onClick={() => setShowNav(false)}
            className="py-10 block duration-200 w-full md:py-2 md:px-5 hover:bg-purple-500 hover:text-white md:hover:translate-y-[10px]"
          >
            About
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#services"
            onClick={() => setShowNav(false)}
            className="py-10 block duration-200 w-full md:py-2 md:px-5 hover:bg-purple-500 hover:text-white md:hover:translate-y-[10px]"
          >
            Services
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#testimonials"
            onClick={() => setShowNav(false)}
            className="py-10 block duration-200 w-full md:py-2 md:px-5 hover:bg-purple-500 hover:text-white md:hover:translate-y-[10px]"
          >
            Testimonials
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#news"
            onClick={() => setShowNav(false)}
            className="py-10 block duration-200 w-full md:py-2 md:px-5 hover:bg-purple-500 hover:text-white md:hover:translate-y-[10px]"
          >
            Latest News
          </a>
        </li>
        <li className="w-full text-center">
          <a
            href="#contact"
            onClick={() => setShowNav(false)}
            className="py-10 block duration-200 w-full md:py-2 md:px-5 hover:bg-purple-500 hover:text-white md:hover:translate-y-[10px]"
          >
            Contact
          </a>
        </li>
      </ul>
      <button onClick={() => setShowNav(false)} className="md:hidden">
        <img src={Logo} alt="Shelly's pets awesome logo" className="h-20" />
      </button>
    </nav>
  );
};

export default Nav;
