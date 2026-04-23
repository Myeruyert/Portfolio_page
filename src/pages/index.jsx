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
    companyLogo: "/images/metro-logo.gif",
    jobRoles: [
      "Python, ApacheSpark, AWS зэрэг технологиудыг ашиглан",
      " даатгалын хэрэглэгчийн мэдээллийг AWS рүү шилжүүлэх",
      "Байгууллагын дотоодод ашиглах системийн backend, frontend хөгжүүлэлт хийх",
      "Prepared and drafted contracts",
      "Represented clients in court",
    ],
    date: "2025.02-2026.04",
  },
  {
    jobTitle: "Human Resources Specialist",
    companyLogo: "/images/gobi.png",
    jobRoles: [
      "Managed recruitment processes for the sales department",
      "Handled onboarding/offboarding, employment contracts, and attendance records",
      "Managed payroll processing and employee benefits",
      "Coordinated procedures for leave and internal transfers",
    ],
    date: "2023.05-2024.05",
  },
  {
    jobTitle: "Legal Officer",
    companyLogo: "/images/mds.png",
    jobRoles: [
      "Drafted legal documents",
      "Prepared and drafted contracts",
      "Translated legal documents from English to Mongolian",
      "Conducted legal research on case-related matters",
    ],
    date: "2022.10-2023.04",
  },
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
    projectName: "Pawchig",
    image: "/images/pawchig.png",
    description: [
      { des: "A platform for animal adoption, donations, and rescue." },
      { des: "My role" },
      {
        des: "Team leader: reviewed team members' code and managed overall project progress.",
      },
      {
        des: "Built the admin site: animal registration, adoption post creation, and donation post management.",
      },
      {
        des: "Registration/login feature: implemented sign-up and sign-in functionality.",
      },
      {
        des: "Adoption feature owner: designed and implemented both frontend and backend for the adoption page.",
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
  },
  {
    projectName: "E-commerce",
    image: "/images/ecommerce.png",
    description: [
      { des: "An online shopping platform for buying and selling apparel." },
      {
        des: "Includes login/logout, order processing, product listings, ratings, comments, and product search. A separate admin page is also provided.",
      },
    ],
    technologies: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "Typescript" },
      { title: "Shadcnui" },
      { title: "MongoDB" },
      { title: "Tailwindcss" },
      { title: "Express.js" },
      { title: "Vercel" },
      { title: "Git" },
      { title: "NPM" },
    ],
  },
  {
    projectName: "Expense-tracker",
    image: "/images/expense-tracker.png",
    description: [
      {
        des: "A site for tracking how much income you earn and how much money you spend each month.",
      },
      {
        des: "Features include login/logout, a bulletin board, income/expense entry and listing, and list search.",
      },
    ],
    technologies: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "Daisyui" },
      { title: "PostgreSQL" },
      { title: "Tailwindcss" },
      { title: "Figma" },
      { title: "Express.js" },
      { title: "Vercel" },
      { title: "Git" },
      { title: "NPM" },
    ],
  },
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
        <div className="bg-gray-50/80 py-20 md:py-24 dark:bg-slate-900" id="experience">
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
                  companyLogo={experience.companyLogo}
                  jobRoles={experience.jobRoles}
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
