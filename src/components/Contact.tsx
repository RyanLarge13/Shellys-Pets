import { FormEvent, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [dynamicWidth, setDynamicWidth] = useState(window.innerWidth);

  const [error, setError] = useState({
    show: false,
    message: "",
  });

  // Reset error with use effect automatically after 5 seconds of being shown
  useEffect(() => {
    if (error.show) {
      setTimeout(() => {
        setError({ show: false, message: "" });
      }, 5000);
    }
  }, [error.show]);

  // On resize make sure the iframe google map can adjust and be dynamic
  useEffect(() => {
    const changeWidth = () => {
      setDynamicWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, [dynamicWidth]);

  const validate = (): boolean => {
    const result = contactFormSchema.safeParse({
      name: name,
      email: email,
      phone: number,
      message: message,
    });

    if (!result.success) {
      setError({ show: true, message: result.error.issues[0].message });
      console.log(result.error.format());
      return false;
    } else {
      console.log("✅ Valid data:", result.data);
      return true;
    }
  };

  const handleSendEmail = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setDisabled(true);

    const formData = {
      from: email,
      to: "shellyshope4you@yahoo.com",
      businessName: "Shelly's Pets",
      logoUrl:
        "https://email-provider-production.up.railway.app/static/shellys-pets.png",
      message: message,
      number: number,
      name: name,
    };

    try {
      const response = await fetch(
        "https://email-provider-production.up.railway.app/send-email/clients",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setError({
        show: true,
        message:
          "Your message was successfully sent and I will reach out to you as soon as possible!",
      });
      console.log(response);
    } catch (err) {
      console.log(err);
      setError({
        show: true,
        message:
          "We are terribly sorry but your message could not be sent at this time. Please try again later",
      });
      setDisabled(false);
    }
  };

  return (
    <section
      id="contact"
      data-observer
      data-index="5"
      className="px-5 pb-20 pt-40 md:px-20 lg:px-40 xl:px-60 lg:flex justify-between items-center"
    >
      {/* Error from invalid for data */}
      {error.show ? (
        <div className="fixed bottom-10 z-[999] left-10 p-3 rounded-md bg-rose-100 shadow-md backdrop-blur-md bg-opacity-20 max-w-[400px]">
          <p>{error.message}</p>
        </div>
      ) : null}
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
          <p className="font-semibold text-lg">WHATSAPP</p>
          <a
            className="hover:text-purple-500 duration-200 flex justify-start items-center gap-x-2"
            href="https://wa.me/message/3O2DQS4WSGV4H1"
          >
            Shelly's Pet Services WhatsApp
            <FaWhatsapp />
          </a>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">EMAIL</p>
          <a
            className="hover:text-purple-500 duration-200"
            href="mailto:shellyshope4you@yahoo.com"
          >
            shellyshope4you@yahoo.com
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
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5845.380640130157!2d-78.7778593!3d42.900480099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30cf109ef67bb%3A0xae96c7a2d43964aa!2s177%20Wallace%20Ave%2C%20Cheektowaga%2C%20NY%2014227!5e0!3m2!1sen!2sus!4v1745861480241!5m2!1sen!2sus"
            width={dynamicWidth - 50}
            height={dynamicWidth}
            style={{ border: 0, maxWidth: 400 }}
            // allowfullscreen={true}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Your Name"
        />
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Phone Number"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full bg-purple-100"
          placeholder="Email Address"
        />
        <textarea
          name=""
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-md outline-none focus:outline-white focus:outline-3 py-3 px-4 shadow-sm my-2 w-full aspect-square max-h-100 bg-purple-100"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          disabled={disabled}
          className="rounded-md shadow-sm bg-purple-300 px-10 py-2 hover:bg-purple-100 duration-200 cursor-pointer"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
