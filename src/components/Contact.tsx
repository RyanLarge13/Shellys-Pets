const Contact = () => {
  return (
    <section className="px-5 pb-20 pt-60 md:px-20 lg:px-40 xl:px-60 lg:flex justify-between items-center">
      <div>
        <p className="text-center lg:text-left">CONTACT NOW</p>
        <h2 className="font-bold text-4xl text-center lg:text-left mt-3 text-purple-500">
          GET IN TOUCH NOW
        </h2>
        <p className="text-center mt-5 max-w-[400px] mx-auto lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          excepturi quaerat quis eaque! Reprehenderit nostrum, nemo sunt nihil,
          nam doloremque ut necessitatibus perspiciatis totam quo esse fuga eius
          corporis fugit!
        </p>
        <div className="mt-20">
          <p className="font-semibold">PHONE</p>
          <p>+17165431234</p>
          <p>+17165431234</p>
        </div>
        <div className="mt-16">
          <p className="font-semibold">EMAIL</p>
          <p>shellyspet@gmail.com</p>
          <p>shellyspet@pets.com</p>
        </div>
        <div className="mt-16">
          <p className="font-semibold">ADDRESS</p>
          <p>1234 Ave, Buffalo, NY 14123</p>
        </div>
      </div>
      <form action="" className="mt-16">
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
          className="rounded-md shadow-sm bg-purple-300 px-10 py-2"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
