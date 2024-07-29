// import Titles from "../small_components";
// import ExternalLink from "../small_components/externalLink";

// const titles = [
//     { title: "React" },
//     { title: "Next.js" },
//     { title: "Typescript" },
//     { title: "Nest.js" },
//     { title: "PostgreSQL" },
//     { title: "Tailwindcss" },
//     { title: "Figma" },
//     { title: "Cypress" },
//     { title: "Storybook" },
//     { title: "Git" },
//   ];

// const ProjectCard = (projectName, image, description, swap) => {
//   return (
//     <>
//       <div className="flex border-x border-b rounded-lg drop-shadow-md">
//         <div className="image bg-gray-100 w-1/2">
//           <img
//             className="p-12 rounded-xl"
//             src={image}
//             alt=""
//           />
//         </div>
//         <div className="text w-1/2 p-12">
//           <h3 className="text-gray-900 font-bold">{projectName}</h3>
//           <p className="my-6">
//             {description}
//           </p>
//           <div className="flex flex-wrap gap-2 font-medium">
//             {titles?.map((titleOne, i) => (
//                 <Titles key={i} title={titleOne.title}/>
//             ))}
//           </div>
//           <ExternalLink/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectCard;
