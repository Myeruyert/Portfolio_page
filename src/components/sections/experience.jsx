import { CiLocationOn } from "react-icons/ci";

const ExperienceCard = ({
  companyLogo,
  jobTitle,
  position,
  jobRoles,
  subRoles1,
  subRoles2,
  date,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between rounded-3xl border border-gray-100 bg-white dark:bg-slate-800/70 dark:border-slate-700 dark:text-white mb-8 md:mb-10 p-5 md:p-8 gap-6 shadow-sm">
      <div className="flex-none md:flex-1 text-center md:text-left">
        <img
          src={companyLogo}
          alt={jobTitle}
          className="w-20 md:w-24 mx-auto md:mx-0 rounded-lg"
        />
      </div>
      <div className="max-w-[500px] flex-auto md:flex-2">
        <h1 className="font-bold text-lg md:text-xl  text-center md:text-left dark:text-white">
          {jobTitle}
        </h1>
        <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
          <CiLocationOn className="text-xl text-emerald-600 dark:text-emerald-300" />
          <span className="text-gray-700 dark:text-gray-300">{position}</span>
        </div>
        <div>
          <div className="dark:text-gray-300">
            {subRoles1?.map((roles, i) => {
              if (!roles) return null;

              return (
                <div key={i} className="pl-6">
                  {roles.title ? (
                    <h3 className="leading-9 font-semibold -ml-6">
                      {roles.title}
                    </h3>
                  ) : null}
                  {roles.des ? (
                    <li className="list-disc text-gray-700 dark:text-gray-300 leading-7">
                      {roles.des}
                    </li>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="dark:text-gray-300 mt-2">
            {subRoles2?.map((roles, i) => {
              if (!roles) return null;

              return (
                <div key={i} className="pl-6">
                  {roles.title ? (
                    <h3 className="leading-9 font-semibold -ml-6">
                      {roles.title}
                    </h3>
                  ) : null}
                  {roles.des ? (
                    <li className="list-disc text-gray-700 dark:text-gray-300 leading-7">
                      {roles.des}
                    </li>
                  ) : null}
                </div>
              );
            })}
          </div>

          <ul className="dark:text-gray-300 pl-6 space-y-2">
            {jobRoles?.map((role, i) => (
              <li
                key={i}
                className="list-disc text-gray-700 dark:text-gray-300 leading-7">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-none md:flex-1 text-center md:text-end text-sm md:text-base text-emerald-700 dark:text-emerald-300 font-semibold">
        <p className="dark:text-emerald-300 ">{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
