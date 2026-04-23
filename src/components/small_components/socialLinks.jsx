import { VscGithubAlt } from "react-icons/vsc";
import { TfiLinkedin } from "react-icons/tfi";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 text-2xl text-gray-600 dark:text-gray-300">
      <Link
        href="https://github.com/Myeruyert"
        className="rounded-full border border-gray-200 p-2 transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
        <VscGithubAlt />
      </Link>
      <Link
        href="https://www.linkedin.com/in/myeruyert-janibyek-b04ba8337/"
        className="rounded-full border border-gray-200 p-2 transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
        <TfiLinkedin />
      </Link>
    </div>
  );
};

export default SocialLinks;
