import { FormEvent } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-[50vh] bg-purple-100 md:px-20 lg:px-40 xl:px-60">
      <div className="border-b p-5 border-b-white lg:flex justify-between items-center gap-x-40">
        <div className="flex-1 p-5">
          <h2 className="font-bold text-4xl mt-3 text-purple-500">
            Shelly's Pets
          </h2>
          <p className="mt-5 mb-2">
            At Shelly's Pets, we believe every pet deserves to feel pampered,
            loved, and looked after with care. From gentle grooming to
            wag-worthy washes, we treat your furry friends like family. Thank
            you for trusting us to keep your pets happy, healthy, and looking
            their best
          </p>
          <hr />
          <div className="flex justify-start items-center gap-x-5 mt-3">
            <button className="hover:text-purple-500 cursor-pointer duration-200">
              <FaFacebook />
            </button>
            <button className="hover:text-purple-500 cursor-pointer duration-200">
              <FaInstagram />
            </button>
            <button className="hover:text-purple-500 cursor-pointer duration-200">
              <FaYoutube />
            </button>
            <button className="hover:text-purple-500 cursor-pointer duration-200">
              <FaTwitter />
            </button>
          </div>
        </div>

        <div className="mt-10 p-5 flex-1">
          <div>
            <h3 className="font-bold text-2xl mt-3 text-purple-400">
              Useful Links
            </h3>
            <ul>
              <li>
                <a className="hover:text-purple-500 duration-200" href="#news">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-500 duration-200"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-500 duration-200"
                  href="#contact"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a className="hover:text-purple-500 duration-200" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-2xl mt-3 text-purple-400">
              Subscribe
            </h3>
            <p>
              Subscribe to weekly offers and give the best care to your loved
              ones
            </p>
            <form
              onSubmit={handleSubscribe}
              className="rounded-full outline-none focus:outline-white focus:outline-3 shadow-sm my-2 w-full bg-purple-300 flex justify-between"
            >
              <input
                type="text"
                placeholder="Your Email"
                className="w-full focus:outline-none py-3 px-4"
              />
              <button
                type="submit"
                className="rounded-full bg-purple-500 p-3 w-13 outline-white outline-2 duration-200 hover:bg-purple-300 hover:outline-black cursor-pointer"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="p-10">
        <p className="text-xs text-center">
          Copyright @Shelly's Pets, All Rights Reserved
        </p>
        <div>
          <ul className="flex gap-x-5 mt-5 justify-center items-center">
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
