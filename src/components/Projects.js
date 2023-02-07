import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: "1",
    title: "React E-Gadget - An E-Commerce Website",
    img1: "https://res.cloudinary.com/duvzeclse/image/upload/v1675787091/Personal%20Portfolio%202/E-gadget_ew0l3k.png",
    img2: "https://res.cloudinary.com/duvzeclse/image/upload/v1675787084/Personal%20Portfolio%202/egadegt_2_puldka.png",
    description:
      "React E-Gadget is an e-commerce website built using React, Redux, and various other front-end technologies. The website provides customers with an intuitive and user-friendly platform for browsing, purchasing, and managing their orders.",

    tools: [
      "React.js",
      "Redux.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
    liveLink: "https://visionary-granita-324a67.netlify.app/",
    frontEndLink: "https://github.com/Sayadkhan/e-gadget",
    backEndLink: "www.google.com",
  },
  {
    id: "2",
    title: "React E-Gadget - An E-Commerce Website",
    img1: "https://res.cloudinary.com/duvzeclse/image/upload/v1675787182/Personal%20Portfolio%202/1_jjqs4g.jpg",
    img2: "https://res.cloudinary.com/duvzeclse/image/upload/v1675787180/Personal%20Portfolio%202/2_ao4k60.jpg",
    description:
      "React E-Gadget is an e-commerce website built using React, Redux, and various other front-end technologies. The website provides customers with an intuitive and user-friendly platform for browsing, purchasing, and managing their orders.",

    tools: [
      "React.js",
      "Redux.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
    liveLink: "",
    frontEndLink: "",
    backEndLink: "",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"Projects"} />

      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
