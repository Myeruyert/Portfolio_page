const ExperienceCard = ({ companyLogo, jobTitle, jobRoles }) => {
    return (
      <>
        <div className="flex justify-between drop-shadow-xl rounded-lg bg-gray-50 mb-12 p-8">
          <div className="flex-1">
            <img src={companyLogo} alt="" className="w-28" />
          </div>
          <div className="flex-2">
            <h1 className="font-bold text-xl mb-4 -ml-4">{jobTitle}</h1>
            <ul>
              {jobRoles?.map((role, i) => (
                <li key={i} className="list-disc">
                  {role}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 text-end">
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default ExperienceCard;
  