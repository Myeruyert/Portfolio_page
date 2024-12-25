import Titles from "../small_components";
import ExternalLink from "../small_components/externalLink";

const Work = ({ projectName, image, description, swap, technologies }) => {
  return (
    <div
      className={`flex flex-col ${
        swap ? "md:flex-row-reverse" : "md:flex-row"
      } border-x border-b rounded-lg drop-shadow-md mb-12`}>
      <div className="image bg-gray-100 w-full md:w-1/2 p-6 md:p-12">
        <img className="rounded-xl object-cover w-full" src={image} alt="" />
      </div>
      <div className="text w-full md:w-1/2 p-6 md:p-12">
        <div className="text-gray-900 font-bold text-center md:text-left">
          {projectName}
        </div>
        <p className="my-4 md:my-6">
          {description?.map((des, i) => (
            <p className="mb-2" key={i}>
              {des.des}
            </p>
          ))}
        </p>
        <div className="flex flex-wrap gap-2 font-medium justify-center md:justify-start">
          {technologies?.map((titleOne, i) => (
            <Titles key={i} title={titleOne.title} />
          ))}
        </div>
        <ExternalLink />
      </div>
    </div>
  );
};

export default Work;
