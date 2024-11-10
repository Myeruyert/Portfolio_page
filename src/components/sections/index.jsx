import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import Paragraphs from "../small_components/paragraphs";
import SocialLinks from "../small_components/socialLinks";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between py-12 md:py-24 px-4 md:px-20 gap-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="text mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Mery 👋</h1>
          <Paragraphs paragraph="..." />
        </div>
        <div className="mb-12">
          <div className="mb-2 flex items-center justify-center md:justify-start">
            <SlLocationPin className="mr-2" />
            <span>Ulaanbaatar, Mongolia</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <GoDotFill className="mr-2 text-emerald-500" />
            <span>Available for new projects</span>
          </div>
        </div>
        <div className="logos flex justify-center md:justify-start">
          <SocialLinks />
        </div>
      </div>
      <div
        className="introImage w-64 h-64 md:w-80 md:h-80 mx-auto mb-14 md:mb-0 md:mx-0 bg-no-repeat bg-[length:100%] bg-center"
        style={{ backgroundImage: "url('images/IMG_0158.jpg')" }}></div>
    </section>
  );
};

export default Intro;
