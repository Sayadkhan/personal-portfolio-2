import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // email js

    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };
  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form onSubmit={sendEmail} className="mt-40 grid  grid-cols-2 gap-20">
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="write your name"
            name="fullname"
            required
            className="name bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="write your email"
            name="email"
            required
            className=" email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
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
          />
        </div>

        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="send message"
            className="uppercase  border py-16 px-28 rounded-full border-white/20 outline-none hover:bg-cyan-400/20 duration-500 w-full hover:border-cyan-400/20"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
