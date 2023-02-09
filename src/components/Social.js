import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/sayad.khan.98/",
  },
  {
    id: 2,
    title: "Twiter",
    url: "https://twitter.com/Abdulla58833783",
  },
  {
    id: 3,
    title: "GitHub",
    url: "https://github.com/Sayadkhan",
  },
  {
    id: 4,
    title: "Linkdin",
    url: "https://www.linkedin.com/in/abdullah-al-sayad-67684a20b/",
  },
  {
    id: 5,
    title: "Leetcode",
    url: "",
  },
];

const Social = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((Social) => (
        <a
          href={Social.url}
          target="_blank"
          rel="noreferrer"
          key={Social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {Social.title}
        </a>
      ))}
    </div>
  );
};

export default Social;
