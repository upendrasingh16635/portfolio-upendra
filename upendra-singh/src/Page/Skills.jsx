import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

const skills = {
  Frontend: [
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <TbBrandJavascript />, label: "JavaScript" },
    { icon: <RiReactjsFill />, label: "React JS" },
    { icon: <RiTailwindCssFill />, label: "Tailwind CSS" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
  ],
  Backend: [
    { icon: <FaNodeJs />, label: "Node JS" },
    { icon: <SiExpress />, label: "Express JS" },
    { icon: <SiMongodb />, label: "MongoDB" },
  ],
  Language: [
    { icon: <IoLogoJavascript />, label: "JavaScript" },
  ],
  Tools: [
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <VscVscode />, label: "VS Code" },
    { icon: <SiPostman />, label: "Postman" },
  ]
};

const SkillCard = ({ title, skills }) => (
  <div id="Skills" className="border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
    <h2 className="text-center text-xl font-bold mb-6">{title}</h2>
    <div className={`grid ${skills.length === 1 ? "place-items-center" : "grid-cols-2 sm:grid-cols-3"} gap-4`}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 border border-gray-600 rounded-lg py-3 px-4 hover:bg-gray-800 transition duration-200"
        >
          <div className="text-2xl text-blue-400">{skill.icon}</div>
          <span className="text-sm">{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="bg-black text-white px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
          A collection of my technical skills and expertise honed through various projects and experiences.
        </p>
      </div>

      {/* Skill Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <SkillCard title="Frontend" skills={skills.Frontend} />
        <SkillCard title="Backend" skills={skills.Backend} />
        <SkillCard title="Language" skills={skills.Language} />
        <SkillCard title="Tools" skills={skills.Tools} />
      </div>
    </div>
  );
};

export default Skills;


