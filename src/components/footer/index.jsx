import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Titles from "../small_components";
import SocialLinks from "../small_components/socialLinks";
import { useLanguage } from "@/context/languageContext";

const Footer = () => {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: "Contact",
      platforms: "You may also find me on these platforms!",
    },
    mn: {
      title: "Холбоо барих",
      platforms: "Дараах платформуудаас намайг бас олж болно!",
    },
    ja: {
      title: "連絡先",
      platforms: "こちらのプラットフォームでもつながれます！",
    },
  };

  return (
    <>
      <div className="footer flex flex-col items-center py-20 md:py-24 text-center">
        <Titles title={copy[language].title} />

        <div className="my-10 md:my-12 w-full max-w-3xl rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm dark:border-slate-700 dark:bg-slate-800/70">
          <div className="mail flex items-center justify-center mb-6 gap-3 md:gap-4">
            <CiMail className="text-2xl md:text-3xl text-emerald-700 dark:text-emerald-300" />
            <span className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-200 break-all">
              j.myeruyert@gmail.com
            </span>
          </div>
          <div className="phone flex items-center justify-center gap-3 md:gap-4">
            <IoCallOutline className="text-2xl md:text-3xl text-emerald-700 dark:text-emerald-300" />
            <span className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-200">
              + 976 85256776
            </span>
          </div>
        </div>
        <div className="mb-2 text-gray-700 dark:text-gray-300">
          <span className="dark:text-gray-300">
            {copy[language].platforms}
          </span>
        </div>
        <div className="mb-4">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Footer;
