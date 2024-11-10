import { CiMail } from "react-icons/ci";
import { BsCopy } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import Titles from "../small_components";
import SocialLinks from "../small_components/socialLinks";

const Footer = () => {
  return (
    <>
      <div className="footer flex flex-col items-center py-24">
        <Titles title="Get in touch" />
        <p className="mt-4 mb-12">
          What’s next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.
        </p>
        <div className="mb-12">
          <div className="mail flex items-center mb-4">
            <CiMail className="text-3xl" />
            <span className="text-4xl mx-5 font-semibold text-gray-900">
              mery@pinecone.mn
            </span>
            <BsCopy className="text-3xl" />
          </div>
          <div className="phone flex items-center">
            <IoCallOutline className="text-3xl" />
            <span className="text-4xl mx-5 font-semibold text-gray-900">
              + 976 88112233
            </span>
            <BsCopy className="text-3xl" />
          </div>
        </div>
        <div className="mb-2">
          <span>You may also find me on these platforms!</span>
        </div>
        <SocialLinks />
      </div>
    </>
  );
};

export default Footer;
