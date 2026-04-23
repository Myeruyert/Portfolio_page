const Logos = ({ logos, texts }) => {
  return (
    <div className="group flex w-24 flex-col items-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/80">
      <div className="text-4xl md:text-5xl transition-transform group-hover:scale-110">
        {logos}
      </div>
      <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-200">
        {texts}
      </p>
    </div>
  );
};

export default Logos;