import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import SocialLinks from "../small_components/socialLinks";

const Intro = () => {
  return (
    <section className="py-28 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/50 p-6 md:p-12 shadow-sm dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/30">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hello!
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                I'm Myeruyert 👋
              </h1>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <SlLocationPin className="text-xl text-emerald-600 dark:text-emerald-300" />
                <span className="text-gray-700 dark:text-gray-300">
                  Ulaanbaatar, Mongolia
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <GoDotFill className="text-emerald-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  Available for new projects
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div
              className="w-64 h-64 sm:w-80 sm:h-80 introImage bg-no-repeat bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: "url('images/IMG_0158.jpg')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
