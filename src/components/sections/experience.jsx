const ExperienceCard = ({ companyLogo, jobTitle, jobRoles }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between drop-shadow-xl rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white mb-8 md:mb-12 p-4 md:p-8 gap-6">
      <div className="flex-none md:flex-1 text-center md:text-left">
        <img
          src={companyLogo}
          alt=""
          className="w-20 md:w-28 mx-auto md:mx-0"
        />
      </div>
      <div className="flex-auto md:flex-2">
        <h1 className="font-bold text-lg md:text-xl mb-4 text-center md:text-left md:-ml-4 dark:text-white">
          {jobTitle}
        </h1>
        <ul className="dark:text-gray-300 pl-6">
          {jobRoles?.map((role, i) => (
            <li key={i} className="list-disc">
              {role}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none md:flex-1 text-center md:text-end dark:text-gray-400">
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
