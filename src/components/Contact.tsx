const Contact = () => {
  return (
    <section className="px-5 py-20">
      <p className="text-center">CONTACT NOW</p>
      <h2 className="font-bold text-4xl text-center mt-3 text-purple-500">
        GET IN TOUCH NOW
      </h2>
      <p className="text-center mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi
        quaerat quis eaque! Reprehenderit nostrum, nemo sunt nihil, nam
        doloremque ut necessitatibus perspiciatis totam quo esse fuga eius
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
      <form action="" className="mt-16">
        <input
          type="text"
          className="rounded-md outline-none focus:outline-white focus:outline-3 px-6 py-2 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Your Name"
        />
        <input
          type="text"
          className="rounded-md outline-none focus:outline-white focus:outline-3 px-6 py-2 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Phone Number"
        />
        <input
          type="text"
          className="rounded-md outline-none focus:outline-white focus:outline-3 px-6 py-2 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Email Address"
        />
        <textarea
          name=""
          id=""
          className="rounded-md outline-none focus:outline-white focus:outline-3 px-6 py-2 shadow-sm my-2 w-full bg-purple-100"
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
