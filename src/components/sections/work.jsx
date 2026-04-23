import Titles from "../small_components";
import ExternalLink from "../small_components/externalLink";

const Work = ({ projectName, image, description, swap, technologies }) => {
  return (
    <div
      className={`flex flex-col ${
        swap ? "md:flex-row-reverse" : "md:flex-row"
      } w-full rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow mb-10 overflow-hidden dark:border-slate-700 dark:bg-slate-800/70`}>
      <div className="image bg-gray-100/70 dark:bg-slate-900/30 w-full md:w-1/2 p-6 md:p-10">
        <img
          className="rounded-2xl object-cover w-full border border-gray-200 dark:border-slate-700"
          src={image}
          alt={projectName}
        />
      </div>
      <div className="text w-full md:w-1/2 p-6 md:p-10">
        <div className="text-gray-900 dark:text-white text-xl font-bold text-center md:text-left">
          {projectName}
        </div>
        <div className="my-4 md:my-6">
          {description?.map((des, i) => (
            <p className="mb-2 text-gray-700 leading-7 dark:text-gray-300" key={i}>
              {des.des}
            </p>
          ))}
        </div>
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
