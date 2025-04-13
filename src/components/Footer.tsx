import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="min-h-[50vh] bg-purple-100 md:px-20 lg:px-40 xl:px-60">
      <div className="border-b p-5 border-b-white lg:flex justify-between items-center gap-x-40">
        <div className="flex-1 p-10">
          <h2 className="font-bold text-4xl mt-3 text-purple-500">
            Shelly's Pets
          </h2>
          <p className="mt-5 mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, iure
            nemo voluptatem alias expedita corrupti esse accusantium placeat
            dolore sequi, modi a voluptatibus porro labore ad adipisci nesciunt
            vel. Fugiat.
          </p>
          <hr />
          <div className="flex justify-start items-center gap-x-5 mt-3">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaYoutube />
            </button>
            <button>
              <FaTwitter />
            </button>
          </div>
        </div>

        <div className="mt-10 p-10 flex-1">
          <div>
            <h3 className="font-bold text-2xl mt-3 text-purple-400">
              Useful Links
            </h3>
            <ul>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">About</a>
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
              action=""
              className="rounded-full outline-none focus:outline-white focus:outline-3 shadow-sm my-2 w-full bg-purple-300 flex justify-between"
            >
              <input
                type="text"
                placeholder="Your Email"
                className="w-full focus:outline-none py-3 px-4"
              />
              <button
                type="submit"
                className="rounded-full bg-purple-500 p-3 w-13 outline-white outline-2"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs">Copyright @Shelly's Pets, All Rights Reserved</p>
        <div>
          <ul className="flex gap-x-5 mt-10">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
