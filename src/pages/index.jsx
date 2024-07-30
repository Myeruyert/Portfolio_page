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
      "https://s3-alpha-sig.figma.com/img/f7f4/1fb2/9978d6752a84190b8a3ff63dfa2ce73a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0sKsLJIEfz9TArXbbWMrIhjw9THLytLIT79iTE~o4k67XSlUZpb20TiNyMyY-gneFduBtNyLMgf~T2XJDoob4Az7rHJjZA4DycGyQ7ObMD1qt2tpPJF~qsZD1kWOtVieHnvQWwVR62LRDy5TiHUY0~EDSE47dmLkR5FAMXzzHj1RCykE8w9T-ZMH01oXSLWtFuNf79S9iuZTnrZVW6xklU9MYR4ZPpmFnB2z~0tI5m7GSiJZpeKf6PpDMH7v3KvNf~tgo6yKPSiIwPbgek64viJ9g40qwoylfyrVavFI1TMYYxQUqHUHWP93t5rkch9~nojlRJbcMjmiGi-fi0T0g__",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    projectName: "Mentorhub",
    image:
      "https://s3-alpha-sig.figma.com/img/600f/0a53/ec233eeec30acb72a718cce9a3c1c7dc?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pUiDc6dFRNgdq0eoctsOEzX6wFf-zXDXwtVfQTJSr3E3rFXqlnrRW7htJsbeyCqkoYFxMdS6dOdrW1DhfHtpZjVh6STxYRzce0GzZXurgaQLLn8JHoXhbwisNeaFIIwbgQZYZcKNLWmq1Mdf9a0NyO7rV7svsaRvTjXpXSoILv85~2jwG-cBYgxugMcLssZIVuMY1Uv9bQOtBeCgCsIbv~4B1ZF727w64sXhEtseHZV6fK5ggeEb24rObupWvJ2ywxVRyCEIOUb9C8M91LLvEJNuVUk48ZNRIFJVfBL5uqZ~E4sc0FJbe~LasvKNlv7VLxV5F9Pru6XEPbmrEzS-Rw__",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    projectName: "iToim",
    image:
      "https://s3-alpha-sig.figma.com/img/8c0d/7b3f/221639601e00cbe07705f752b21fc588?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoHLnGVsbuo54XYM0v9rYgCSuZLOWnhusPxmNfLTmQvTSeQIDupLaqzB~cYM8ZDsEuWR41e2JyYQ4HUOcaMeI8kcb9ogasQefPHVSyTFQMuJQuIzIz2onmeNLpkD-gn9ZBwBS-bqejDDPvJVWB8i8yvLEtIvnUeGFyAvIh-EZoPMYXoiMCyrri91lWX~YSPYIITT4L15ACVSoMvt2EQwE-nR9CAdzCMs~7tLZprc3jNZdsvIHflw3v0X9~vvvjsglUxQSIVz0DyXeR2WJFCi5Yps91vrCSGlzB~Lab~6dEPaZ-0XYNmY~3rAU7AXOm6urxaREoOgPxaDaOaDxT3~kw__",
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
