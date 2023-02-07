import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    skill: "html",
  },
  {
    id: 2,
    skill: "css",
  },
  {
    id: 3,
    skill: "Bootstrap",
  },
  {
    id: 4,
    skill: "Tailwind CSS",
  },
  {
    id: 5,
    skill: "JavaScript",
  },
  {
    id: 6,
    skill: "React.js",
  },
  {
    id: 7,
    skill: "React Router",
  },
  {
    id: 8,
    skill: "Redux.js",
  },
  {
    id: 9,
    skill: "Redux Toolkit",
  },
  {
    id: 10,
    skill: "Axios",
  },
  {
    id: 11,
    skill: "GSAp",
  },
  {
    id: 12,
    skill: "Firebase",
  },
];

const Skills = () => {
  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />
      <div className="skills-wrapper grid grid-cols-2 gap-10 mt-40 uppercase ">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
