import Titles from "../small_components";
import Paragraphs from "../small_components/paragraphs";

const paragraphDescriptions = [
  {
    des: "I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.",
  },
  {
    des: "Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.",
  },
  { des: "Finally, some quick bits about me." },
];

const AboutMe = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
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
              Curious about me? Here you have it:
            </h2>

            {paragraphDescriptions.map((para, i) => (
              <Paragraphs key={i} paragraph={para.des} />
            ))}

            <ul className="aboutme list-disc pl-6 md:pl-8 my-6 space-y-2 text-left">
              <li>B.E. in Computer Engineering</li>
              <li>Avid Learner</li>
              <li>Full time freelancer</li>
            </ul>

            <Paragraphs paragraph="One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
