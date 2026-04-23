import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiShadcnui } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiAws } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { SiVercel } from "react-icons/si";

import Titles from "../small_components";
import Logos from "../small_components/logos";

const allLogos = [
  { label: "JavaScript", icon: <SiJavascript className="jslogo" /> },
  { label: "TypeScript", icon: <SiTypescript className="tslogo" /> },
  { label: "GraphQL", icon: <SiGraphql className="graphql" /> },
  { label: "Python", icon: <SiPython className="pythonlogo" /> },
  { label: "Java", icon: <FaJava className="javalogo" /> },
  { label: "AWS", icon: <FaAws className="awslogo" /> },
  { label: "React", icon: <FaReact className="reactlogo" /> },
  { label: "Next.js", icon: <SiNextdotjs className="nextlogo" /> },
  { label: "Node.js", icon: <SiNodedotjs className="nodelogo" /> },
  { label: "Express.js", icon: <SiExpress className="expresslogo" /> },
  { label: "PostgreSQL", icon: <BiLogoPostgresql className="postgre" /> },
  { label: "MongoDB", icon: <SiMongodb className="mongologo" /> },
  {
    label: "Apache Spark",
    icon: <SiApachespark className="apachesparklogo" />,
  },
  { label: "Tailwindcss", icon: <SiTailwindcss className="tailwindlogo" /> },
  { label: "Shadcnui", icon: <SiShadcnui className="shadcnlogo" /> },
  { label: "Cypress", icon: <SiCypress className="cypresslogo" /> },
  { label: "HTML", icon: <SiHtml5 className="htmllogo" /> },
  { label: "CSS", icon: <SiCss3 className="csslogo" /> },
  { label: "NPM", icon: <SiNpm className="npmlogo" /> },
  { label: "Git", icon: <FaGitAlt className="gitlogo" /> },
  { label: "Postman", icon: <SiPostman className="postmanlogo" /> },
  { label: "Vercel", icon: <SiVercel className="vercellogo" /> },
  // {
  //   label: "TeraTerm",
  //   image: "public/images/teraterm.png",
  //   className: "teratermlogo",
  //   backgroundImage: (
  //     <img
  //       src="public/images/teraterm.png"
  //       className="teratermlogo"
  //       style={{ backgroundImage: "url('public/images/teraterm.png')" }}
  //     />
  //   ),
  // },
];

const Skills = () => {
  return (
    <div className="py-12 md:py-24 px-4 md:px-0 skills">
      <div className="flex flex-col items-center text-center">
        <Titles title="Skills" />
        <p className="mt-4 mb-8 md:mb-12"></p>
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
