import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/200155582_2977898105822483_3993553919687197994_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGD9moUpIvzallytDRyMWW-KwO_-jGAIAkrA7_6MYAgCe0PY8FiatoLRWzEjrA2cA4IQfPTtepnkZtLlzT3dbmi&_nc_ohc=mF6yEZrrw3YAX8nRgOo&_nc_ht=scontent.fdac149-1.fna&oh=00_AfA5nhPMJHHwzxwpJDqBhn4CDAdJ8Rx2ToC1SsDgjmJQUw&oe=64021C39",

  img2: "https://scontent.fdac149-1.fna.fbcdn.net/v/t1.6435-9/158997860_186166876611599_2910607086133018237_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeE8yXTWk6C9GR7IgiJkgE6CwlM2Wt_yNOrCUzZa3_I06rGB0yif6KMtDKyxG-kkpbnQ2EXJSfJntMP3YF9WaRiL&_nc_ohc=sHHuw1U1UuMAX8SMgzd&_nc_ht=scontent.fdac149-1.fna&oh=00_AfDRG6wM8iQ5da4I_Wo0RK0CKu5QTacm4RgoAdjFxQ_H0Q&oe=64022274",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>ReactJS</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
