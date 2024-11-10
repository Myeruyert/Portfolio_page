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
    jobTitle: "Sr. Frontend Developer",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwNx5khMD2MHS8BqKjYaSSlj-_arAcPHlGg&s",
    jobRoles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    jobTitle: "Team Lead",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwNx5khMD2MHS8BqKjYaSSlj-_arAcPHlGg&s",
    jobRoles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    jobTitle: "FullStack Developer",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwNx5khMD2MHS8BqKjYaSSlj-_arAcPHlGg&s",
    jobRoles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const allJobs = [
  {
    projectName: "UBCab",
    image:
      "https://play-lh.googleusercontent.com/5gvUlbxx4NDapHSEBUzn36ywcgWJelpSX5T3I_igm2MXB8eiOc_9KZ6XvfduPN-3ps0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    projectName: "Mentorhub",
    image:
      "https://play-lh.googleusercontent.com/5gvUlbxx4NDapHSEBUzn36ywcgWJelpSX5T3I_igm2MXB8eiOc_9KZ6XvfduPN-3ps0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    projectName: "iToim",
    image:
      "https://play-lh.googleusercontent.com/5gvUlbxx4NDapHSEBUzn36ywcgWJelpSX5T3I_igm2MXB8eiOc_9KZ6XvfduPN-3ps0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <div className="bg-gray-50 py-24 dark:bg-slate-900">
        <div className="experienceWidth">
          <div className="flex flex-col items-center">
            <Titles title="Experiences" />
            <p className="mt-4 mb-12">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
          <div className="mx-24">
            {experiences?.map((experience, i) => (
              <ExperienceCard
                key={i}
                jobTitle={experience.jobTitle}
                companyLogo={experience.companyLogo}
                jobRoles={experience.jobRoles}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="work py-24">
        <div className="flex flex-col items-center justify-center">
          <Titles title="Work" />
          <p className="mt-4 mb-12">
            Some of the noteworthy projects I have built:
          </p>

          {allJobs?.map((project, i) => (
            <Work
              projectName={project.projectName}
              description={project.description}
              image={project.image}
              swap={i % 2}
            />
          ))}
        </div>
      </div>

      <Footer />
      <div className="bg-gray-50 dark:bg-slate-900">
        <div className="copyrightWidth flex justify-center items-center gap-2 py-6">
          <LuCopyright />
          <span>2024 | Greetings with ❤️️ from Ulaanbaatar</span>
        </div>
      </div>
    </>
  );
};

export default Home;
