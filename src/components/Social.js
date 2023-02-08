const data = [
  {
    id: 1,
    title: "Facebook",
    url: "",
  },
  {
    id: 2,
    title: "Twiter",
    url: "",
  },
  {
    id: 3,
    title: "GitHub",
    url: "",
  },
  {
    id: 4,
    title: "Linkdin",
    url: "",
  },
  {
    id: 5,
    title: "Leetcode",
    url: "",
  },
];

const Social = () => {
  return (
    <div className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50">
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
