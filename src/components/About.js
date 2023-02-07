import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/duvzeclse/image/upload/v1675733858/Personal%20Portfolio%202/Hero1_tqfsod.jpg",
  img2: "https://res.cloudinary.com/duvzeclse/image/upload/v1675804039/Personal%20Portfolio%202/About2_tufzg3.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right">
          <p className="mt-10">
            I am a highly skilled and motivated React JS developer with a
            passion for creating engaging and dynamic web applications. With
            extensive experience in Redux, Redux Router, and other cutting-edge
            technologies, I have a proven track record of delivering
            high-quality, scalable solutions that meet the needs of diverse
            businesses. Whether you are looking for a complex project or a
            simple, elegant design, I have the technical proficiency and
            creativity to bring your vision to life.
          </p>
          <p className="mt-10">
            In addition to my technical skills, I am a collaborative team player
            who is dedicated to working with others to achieve great things. I
            believe that communication and teamwork are the keys to success, and
            I am always eager to learn and grow as a developer. If you are
            looking for a talented React JS developer who can bring your digital
            vision to life, I would be honored to discuss your project with you.
            Let's connect and see how I can help take your business to the next
            level."
          </p>

          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            className="uppercase inline-block mt-10 py-8 px-14 border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
