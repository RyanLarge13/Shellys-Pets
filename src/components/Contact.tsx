import { FormEvent } from "react";

const Contact = () => {
  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      data-observer
      data-index="5"
      className="px-5 pb-20 pt-40 md:px-20 lg:px-40 xl:px-60 lg:flex justify-between items-center"
    >
      <div>
        <p className="text-center lg:text-left">CONTACT NOW</p>
        <h2 className="font-bold text-4xl text-center lg:text-left mt-3 text-purple-500">
          GET IN TOUCH NOW
        </h2>
        <p className="text-center mt-5 max-w-[400px] mx-auto lg:text-left">
          We’d love to hear from you! Whether you're looking to schedule a dog
          walk, bath, or de-furing session, just drop us a message below. Our
          team is here to help and will get back to you as soon as
          possible—because your pup’s comfort is our priority! 🐾
        </p>
        <div className="mt-20">
          <p className="font-semibold text-lg">PHONE</p>
          <a
            className="hover:text-purple-500 duration-200"
            href="tel:7162567922"
          >
            716-256-7922
          </a>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">EMAIL</p>
          <a
            className="hover:text-purple-500 duration-200"
            href="mailto:test.com"
          >
            shellyspets@gaml.com
          </a>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">ADDRESS</p>
          <a
            className="hover:text-purple-500 duration-200"
            href="https://www.google.com/maps/dir//177%20Wallace,%20Ave,%20Cheektowaga,%20NY%2014227%20"
          >
            177 Wallace Ave, Cheektowaga, NY 14227
          </a>
        </div>
        <div className="mt-16">
          <p className="font-semibold text-lg">HOURS</p>
          <p className="font-semibold mt-2">Mon - Fri</p>
          <p className="">10am - 5pm</p>
          <p className="font-semibold">Saturday</p>
          <p>12am - 4pm</p>
          <p className="font-semibold">Sunday</p>
          <p>Closed</p>
        </div>
      </div>
      <form onSubmit={handleSendEmail} className="mt-16">
        <input
          type="text"
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Your Name"
        />
        <input
          type="text"
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Phone Number"
        />
        <input
          type="text"
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Email Address"
        />
        <textarea
          name=""
          id=""
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full aspect-square max-h-100 bg-purple-100"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="rounded-md shadow-sm bg-purple-300 px-10 py-2 hover:bg-purple-100 duration-200 cursor-pointer"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
