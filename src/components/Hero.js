import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useImageReveal } from "../hooks/gsap";
import { useHeadlineReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/duvzeclse/image/upload/v1675804039/Personal%20Portfolio%202/About2_tufzg3.jpg",

  img2: "https://res.cloudinary.com/duvzeclse/image/upload/v1675733314/Personal%20Portfolio%202/Hero2_k5iz0i.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1Ref = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadline1Ref, heroHeadline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadline1Ref}>ReactJS</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
