"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/sections";
import AboutMe from "@/components/sections/aboutMe";
import ExperienceCard from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";
import Titles from "@/components/small_components";
import { LuCopyright } from "react-icons/lu";

const experiences = [
  {
    jobTitle: "Software Engineer",
    position: "Tokyo, Japan",
    companyLogo: "/images/metro-logo.gif",
    subRoles1: [
      { title: "AWS Data Pipeline Development" },
      {
        des: "Built and automated ETL pipelines on AWS to process large-scale data and load into Iceberg tables",
      },
      {
        des: "Orchestrated data workflows with EventBridge and Step Functions, with storage/querying via S3 and Athena",
      },
    ],
    subRoles2: [
      { title: "Backend & Full-Stack Development" },
      { des: "Developed backend and frontend features for enterprise systems" },
      {
        des: "Performed unit and integration testing, and resolved system issues in production-like environments",
      },
    ],
    date: "2025.02-2026.04",
  },
  {
    jobTitle: "Human Resources Specialist",
    position: "Ulaanbaatar, Mongolia",
    companyLogo: "/images/gobi.png",
    jobRoles: [
      "Managed recruitment processes for the sales department",
      "Handled onboarding/offboarding, employment contracts, and attendance records",
      "Managed payroll processing and employee benefits",
      "Coordinated procedures for leave and internal transfers",
    ],
    date: "2023.05-2024.05",
  },
  // {
  //   jobTitle: "Legal Officer",
  //   position: "Ulaanbaatar, Mongolia",
  //   companyLogo: "/images/mds.png",
  //   jobRoles: [
  //     "Preparing, drafting legal documents",
  //     "Participate to court related operations, assistant and attendance records",
  //     "Translated legal documents from English to Mongolian",
  //     "Conducted legal research on case-related matters",
  //   ],
  //   date: "2022.10-2023.04",
  // },
  // {
  //   jobTitle: "Legal Consultant",
  //   companyLogo: "/images/wpi.jpg",
  //   jobRoles: [
  //     "Provided legal advice and response strategies for disputes",
  //     "Drafted legal documents",
  //     "Prepared and drafted contracts",
  //     "Represented clients in court",
  //   ],
  //   date: "2022.09-2022.10",
  // },
];

const allJobs = [
  {
    projectName: "MS&AD",
    image: "/images/Amazon_Web_Services-Logo.wine.png",
    description: [
      {
        des: "Designed and implemented data processing pipelines on AWS for large-scale datasets (100M+ rows, 7,000+ columns)",
      },
      {
        des: "Developed ETL processes using AWS Glue (Apache Spark) and Python to transform and load data into Iceberg tables.",
      },
      {
        des: "Built automated workflows using EventBridge and Step Functions.",
      },
      {
        des: "Managed data storage in S3 and enabled querying using Athena.",
      },
      {
        des: "Implemented data validation and processing steps within AWS pipeline.",
      },
      {
        des: "Worked with data lake architecture and large-scale data ingestion.",
      },
    ],
    technologies: [
      { title: "AWS Glue" },
      { title: "Apache Spark" },
      { title: "Apache Iceberg" },
      { title: "AWS S3" },
      { title: "AWS Athena" },
      { title: "AWS Event Bridge" },
      { title: "AWS Step Functions" },
      { title: "AWS IAM" },
      { title: "AWS CloudWatch" },
      { title: "AWS Lake Formation" },
      { title: "Python" },
    ],
    link: "",
  },
  {
    projectName: "Pawchig",
    image: "/images/pawchig.png",
    description: [
      { des: "A platform for animal adoption, donations, and rescue." },
      {
        des: "Team leader: Reviewed team members' code and managed overall project progress.",
      },
      {
        des: "Built the admin site: Animal registration, adoption post creation, and donation post management.",
      },
      {
        des: "Registration/login feature: Implemented sign-up and sign-in functionality.",
      },
      {
        des: "Adoption feature owner: Designed and implemented both frontend and backend for the adoption page.",
      },

      // Donation payment feature
      //
      // Built backend donation payment flow using Stripe
      //
      // "}
    ],
    technologies: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "Typescript" },
      { title: "Shadcnui" },
      { title: "MongoDB" },
      { title: "Tailwindcss" },
      { title: "Figma" },
      { title: "Express.js" },
      { title: "Vercel" },
      { title: "Git" },
      { title: "NPM" },
    ],
    link: "",
  },
  {
    projectName: "Smart Industry System",
    image: "/images/bg_advantages.jpg",
    description: [
      {
        des: "Developed backend and frontend features for enterprise applications using Java-based frameworks.",
      },
      {
        des: "Implemented features such as: Batch update processing, Application/approval workflows, File input/output handling, Data validation and checking functions.",
      },
      {
        des: "Investigated and resolved system issues and bugs.",
      },
      {
        des: "Contributed to system enhancements and version updates.",
      },
    ],
    technologies: [
      { title: "Java" },
      { title: "JavaScript" },
      { title: "PostgreSQL" },
      { title: "Struts2" },
      { title: "SVN" },
      { title: "Bootstrap" },
      { title: "TeraTerm" },
      { title: "Eclipse" },
    ],
    link: "",
  },

  // {
  //   projectName: "E-commerce",
  //   image: "/images/ecommerce.png",
  //   description: [
  //     { des: "An online shopping platform for buying and selling apparel." },
  //     {
  //       des: "Includes login/logout, order processing, product listings, ratings, comments, and product search. A separate admin page is also provided.",
  //     },
  //   ],
  //   technologies: [
  //     { title: "React.js" },
  //     { title: "Next.js" },
  //     { title: "Node.js" },
  //     { title: "Typescript" },
  //     { title: "Shadcnui" },
  //     { title: "MongoDB" },
  //     { title: "Tailwindcss" },
  //     { title: "Express.js" },
  //     { title: "Vercel" },
  //     { title: "Git" },
  //     { title: "NPM" },
  //   ],
  //   link: "",
  // },
  // {
  //   projectName: "Expense-tracker",
  //   image: "/images/expense-tracker.png",
  //   description: [
  //     {
  //       des: "A site for tracking how much income you earn and how much money you spend each month.",
  //     },
  //     {
  //       des: "Features include login/logout, a bulletin board, income/expense entry and listing, and list search.",
  //     },
  //   ],
  //   technologies: [
  //     { title: "React.js" },
  //     { title: "Next.js" },
  //     { title: "Node.js" },
  //     { title: "Daisyui" },
  //     { title: "PostgreSQL" },
  //     { title: "Tailwindcss" },
  //     { title: "Figma" },
  //     { title: "Express.js" },
  //     { title: "Vercel" },
  //     { title: "Git" },
  //     { title: "NPM" },
  //   ],
  // },
];

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="w-screen bg-transparent dark:bg-slate-900">
        <Header />
      </div>

      <main className="bg-white dark:bg-slate-900">
        <Intro />
        <div id="about" className="bg-gray-50/80 dark:bg-slate-900">
          <AboutMe />
        </div>
        <section id="skills" className="bg-white dark:bg-slate-900">
          <Skills />
        </section>
        <div
          className="bg-gray-50/80 py-20 md:py-24 dark:bg-slate-900"
          id="experience">
          <div className="experienceWidth">
            <div className="flex flex-col items-center">
              <Titles title="Work Experience" />
              <p className="mt-4 mb-10 text-gray-600 dark:text-gray-300 text-center">
                A journey across engineering, operations, and problem solving.
              </p>
            </div>
            <div className="mx-2 md:mx-10">
              {experiences?.map((experience, i) => (
                <ExperienceCard
                  key={i}
                  jobTitle={experience.jobTitle}
                  position={experience.position}
                  companyLogo={experience.companyLogo}
                  jobRoles={experience.jobRoles}
                  subRoles1={experience.subRoles1}
                  subRoles2={experience.subRoles2}
                  date={experience.date}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="work py-20 md:py-24" id="work">
          <div className="flex flex-col items-center justify-center">
            <Titles title="Projects" />
            <p className="mt-4 mb-10 text-gray-600 dark:text-gray-300 text-center">
              Selected projects focused on real users and practical outcomes.
            </p>

            {allJobs?.map((project, i) => (
              <Work
                key={i}
                projectName={project.projectName}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
                swap={i % 2}
              />
            ))}
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>

      <div className="bg-gray-50 dark:bg-slate-900 margin-bottom-10 border-t border-gray-200 dark:border-slate-700">
        <div className="copyrightWidth flex justify-center items-center gap-2 py-6">
          <LuCopyright className="text-gray-600 dark:text-gray-300" />
          <span className="text-gray-600 dark:text-gray-300">
            2026 | Greetings with ❤️ from Ulaanbaatar, Mongolia
          </span>
          <span className="pb-10"></span>
        </div>
      </div>
    </>
  );
};

export default Home;
