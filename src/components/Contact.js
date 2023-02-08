import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";
import { useContactReveal } from "../hooks/gsap";

const Contact = () => {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    // email js
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Message sent");
        },
        () => {
          console.log("Message not sent");
        }
      );

    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const inputs = [inputRef1, inputRef2, inputRef3, inputRef4];

  useContactReveal(inputs);

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid  grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="write your name"
            name="fullname"
            required
            className="name bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={inputRef1}
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="write your email"
            name="email"
            required
            className=" email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={inputRef2}
          />
        </div>
        <div className="form-control overflow-hidden">
          <textarea
            placeholder="write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            ref={inputRef3}
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="send message"
            className="uppercase  border py-16 px-28 rounded-full border-white/20 outline-none hover:bg-cyan-400/20 duration-500 w-full hover:border-cyan-400/20"
            ref={inputRef4}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
