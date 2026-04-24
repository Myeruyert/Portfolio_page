const Titles = ({ title }) => {
  return (
    <div className="rounded-full border border-emerald-100 bg-emerald-50/80 px-5 py-1.5 w-fit text-lg font-semibold tracking-wide text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
      {title}
    </div>
  );
};

export default Titles;
