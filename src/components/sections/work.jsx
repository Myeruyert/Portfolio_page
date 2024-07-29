// import ExternalLink from "./ExternalLink";
// import Titles from "./titles";

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

const Work = () => {
  return (
    <>
      <div className="flex border-x border-b rounded-lg drop-shadow-md">
        <div className="image bg-gray-100 w-1/2">
          <img
            className="p-12 rounded-xl"
            src="https://s3-alpha-sig.figma.com/img/f7f4/1fb2/9978d6752a84190b8a3ff63dfa2ce73a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0sKsLJIEfz9TArXbbWMrIhjw9THLytLIT79iTE~o4k67XSlUZpb20TiNyMyY-gneFduBtNyLMgf~T2XJDoob4Az7rHJjZA4DycGyQ7ObMD1qt2tpPJF~qsZD1kWOtVieHnvQWwVR62LRDy5TiHUY0~EDSE47dmLkR5FAMXzzHj1RCykE8w9T-ZMH01oXSLWtFuNf79S9iuZTnrZVW6xklU9MYR4ZPpmFnB2z~0tI5m7GSiJZpeKf6PpDMH7v3KvNf~tgo6yKPSiIwPbgek64viJ9g40qwoylfyrVavFI1TMYYxQUqHUHWP93t5rkch9~nojlRJbcMjmiGi-fi0T0g__"
            alt=""
          />
        </div>
        <div className="text w-1/2 p-12">
          <h3 className="text-gray-900 font-bold">UBCab</h3>
          <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-wrap gap-2 font-medium">
            {titles?.map((titleOne, i) => (
                <Titles key={i} title={titleOne.title}/>
            ))}
          </div>
          <ExternalLink/>
        </div>
      </div>
    </>
  );
};

export default Work;
