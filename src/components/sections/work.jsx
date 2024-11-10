import Titles from "../small_components";
import ExternalLink from "../small_components/externalLink";

const titles = [
  { title: "React" },
  { title: "Next.js" },
  { title: "Typescript" },
  { title: "Nest.js" },
  { title: "PostgreSQL" },
  { title: "Tailwindcss" },
  { title: "Figma" },
  { title: "Cypress" },
  { title: "Storybook" },
  { title: "Git" },
];

const Work = ({ projectName, image, description, swap }) => {
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
        <p className="my-4 md:my-6">{description}</p>
        <div className="flex flex-wrap gap-2 font-medium justify-center md:justify-start">
          {titles?.map((titleOne, i) => (
            <Titles key={i} title={titleOne.title} />
          ))}
        </div>
        <ExternalLink />
      </div>
    </div>
  );
};

export default Work;
