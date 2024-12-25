import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import Paragraphs from "../small_components/paragraphs";
import SocialLinks from "../small_components/socialLinks";

const Intro = () => {
  return (
    <section className=" py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              こんにちは！
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              メルエルトです👋
            </h1>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <SlLocationPin className="text-xl" />
              <span>ウランバートル、モンゴル</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <GoDotFill className="text-emerald-500" />
              <span>新規プロジェクト対応可能</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <SocialLinks />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div
            className="w-64 h-64 sm:w-80 sm:h-80 introImage bg-no-repeat bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: "url('images/IMG_0158.jpg')" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
