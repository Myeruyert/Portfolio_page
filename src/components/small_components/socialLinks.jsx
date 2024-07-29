import { VscGithubAlt } from "react-icons/vsc";
import { TfiTwitter } from "react-icons/tfi";
import { FaFigma } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex mr-1.5 text-2xl text-gray-600">
      <VscGithubAlt className="mr-1.5" />
      <TfiTwitter className="mr-1.5" />
      <FaFigma />
    </div>
  );
};

export default SocialLinks;
