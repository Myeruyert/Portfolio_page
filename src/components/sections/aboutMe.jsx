import Titles from "../small_components";
import Paragraphs from "../small_components/paragraphs";

const AboutMe = () => {
  return (
    <>
      <div
        className="AboutMe"
      >
        <div className="AboutMeWidth py-24">
          <div className="flex justify-center">
            <Titles title="About Me"/>
          </div>
          <div className="flex justify-between mx-8 mt-12">
            <div className="w-1/2">
              <div className="aboutMeImage w-96 h-96 ml-10"></div>
            </div>

            <div className="text w-1/2">
              <h2 className="text-gray-900 text-3xl font-semibold">
                Curious about me? Here you have it:{" "}
              </h2>
              <Paragraphs paragraph="I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code."/>
              {/* <Paragraphs paragraph="Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more." />
              <Paragraphs paragraph="With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub." />
              <Paragraphs paragraph="Finally, some quick bits about me." /> */}
              <ul className="aboutme">
                <li>B.E. in Computer Engineering</li>
                <li>Avid Learner</li>
                <li>Full time freelancer</li>
              </ul>
              <Paragraphs paragraph="One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
