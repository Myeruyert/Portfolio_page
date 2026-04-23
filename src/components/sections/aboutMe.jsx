import Titles from "../small_components";
import Paragraphs from "../small_components/paragraphs";

const paragraphDescriptions = [
  {
    des: "I am currently aiming to become a software engineer, with a strong focus on JavaScript. I want to contribute to both frontend and backend development using frameworks such as React.js, Next.js, and Express.js, and I always stay motivated to learn new technologies.",
  },
  {
    des: "My long-term goal as an engineer is to build a broad technical skill set and contribute to practical, real-world development. To achieve this, I left my previous role and began studying programming seriously at an IT training institute, where I have worked on many projects and gained hands-on, job-ready skills through real development workflows.",
  },
  {
    des: "Although I do not yet have official professional engineering experience, I believe these project experiences have prepared me to contribute as a productive team member from day one.",
  },
];

const AboutMe = () => {
  return (
    <div className="">
      <div className="AboutMeWidth py-12 md:py-24 px-4 md:px-0">
        <div className="flex justify-center">
          <Titles title="About Me" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mx-4 md:mx-8 mt-8 md:mt-12">
          {/* Image Section - Hidden on mobile */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-start">
            <div
              className="aboutMeImage w-96 h-96 md:ml-10 bg-cover bg-center"
              style={{
                backgroundImage: "url('images/IMG_174722.jpg')",
              }}></div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-semibold mb-6">
              About Me
            </h2>

            {paragraphDescriptions.map((para, i) => (
              <Paragraphs key={i} paragraph={para.des} />
            ))}

            {/* <ul className="aboutme list-disc pl-6 md:pl-8 my-6 space-y-2 text-left">
              <li>B.E. in Computer Engineering</li>
              <li>Avid Learner</li>
              <li>Full time freelancer</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
