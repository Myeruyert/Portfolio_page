import { VscGithubAlt } from "react-icons/vsc";
import { TfiLinkedin } from "react-icons/tfi";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex gap-2mr-1.5 text-2xl text-gray-600">
      <Link
        href="https://github.com/Myeruyert"
        className="hover:text-emerald-500 cursor-pointer">
        <VscGithubAlt className="mr-1.5 dark:text-gray-300" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/myeruyert-janibyek-b04ba8337/"
        className="hover:text-emerald-500 cursor-pointer">
        <TfiLinkedin className="mr-1.5 dark:text-gray-300" />
      </Link>
    </div>
  );
};

export default SocialLinks;
