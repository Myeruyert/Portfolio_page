import { LiaExternalLinkAltSolid } from "react-icons/lia";

const ExternalLink = () => {
  return (
    <div className="pt-6">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-gray-300 dark:hover:border-emerald-700 dark:hover:text-emerald-300">
        <span>View project</span>
        <LiaExternalLinkAltSolid className="text-lg" />
      </button>
    </div>
  );
};

export default ExternalLink;