import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import Titles from "../small_components";
import Logos from "../small_components/logos";

const allLogos = [
  { label: "JavaScript", icon: <SiJavascript className="jslogo" /> },
  { label: "TypeScript", icon: <SiTypescript className="tslogo" /> },
  { label: "React", icon: <FaReact className="reactlogo" /> },
  { label: "Next.js", icon: <SiNextdotjs className="nextlogo" /> },
  { label: "Node.js", icon: <SiNodedotjs className="nodelogo" /> },
  { label: "Express.js", icon: <SiExpress className="expresslogo" /> },
  { label: "Nest.js", icon: <SiNestjs className="nestlogo" /> },
  { label: "Socket.io", icon: <SiSocketdotio className="socketlogo" /> },
  { label: "PostgreSQL", icon: <BiLogoPostgresql className="postgre" /> },
  { label: "MongoDB", icon: <SiMongodb className="mongologo" /> },
  { label: "Sass/Scss", icon: <FaSass className="sasslogo" /> },
  { label: "Tailwindcss", icon: <SiTailwindcss className="tailwindlogo" /> },
  { label: "Figma", icon: <SiFigma className="figmalogo" /> },
  { label: "Cypress", icon: <SiCypress className="cypresslogo" /> },
  { label: "Storybook", icon: <SiStorybook className="storybooklogo" /> },
  { label: "Git", icon: <FaGitAlt className="gitlogo" /> },
];

const Skills = () => {
  return (
    <div className="py-12 md:py-24 px-4 md:px-0 skills">
      <div className="flex flex-col items-center text-center">
        <Titles title="Skills" />
        <p className="mt-4 mb-8 md:mb-12">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      <div className="icons text-4xl md:text-6xl flex flex-wrap gap-8 md:gap-16 justify-center md:justify-between">
        {allLogos?.map((logoOne, i) => (
          <Logos key={i} logos={logoOne.icon} texts={logoOne.label} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
