import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Titles from "../small_components";
import SocialLinks from "../small_components/socialLinks";

const Footer = () => {
  return (
    <>
      <div className="footer flex flex-col items-center py-24">
        <Titles title="連絡先" />

        <div className="my-12">
          <div className="mail flex items-center mb-4">
            <CiMail className="text-3xl" />
            <span className="text-4xl mx-5 font-semibold text-gray-900">
              j.myeruyert@gmail.com
            </span>
            {/* <BsCopy className="text-3xl" /> */}
          </div>
          <div className="phone flex items-center">
            <IoCallOutline className="text-3xl" />
            <span className="text-4xl mx-5 font-semibold text-gray-900">
              + 976 85256776
            </span>
          </div>
        </div>
        <div className="mb-2">
          <span>You may also find me on these platforms!</span>
        </div>
        <div className="mb-4">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Footer;
