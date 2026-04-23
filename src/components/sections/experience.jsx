const ExperienceCard = ({ companyLogo, jobTitle, jobRoles, date }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between rounded-3xl border border-gray-100 bg-white dark:bg-slate-800/70 dark:border-slate-700 dark:text-white mb-8 md:mb-10 p-5 md:p-8 gap-6 shadow-sm">
      <div className="flex-none md:flex-1 text-center md:text-left">
        <img
          src={companyLogo}
          alt={jobTitle}
          className="w-20 md:w-24 mx-auto md:mx-0 rounded-lg"
        />
      </div>
      <div className="flex-auto md:flex-2">
        <h1 className="font-bold text-lg md:text-xl mb-4 text-center md:text-left dark:text-white">
          {jobTitle}
        </h1>
        <ul className="dark:text-gray-300 pl-6 space-y-2">
          {jobRoles?.map((role, i) => (
            <li key={i} className="list-disc text-gray-700 dark:text-gray-300 leading-7">
              {role}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none md:flex-1 text-center md:text-end text-sm md:text-base text-emerald-700 dark:text-emerald-300 font-semibold">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
