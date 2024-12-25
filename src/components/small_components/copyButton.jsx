import { BsCopy } from "react-icons/bs";
import { useState } from "react";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`メリ
フロントエンドエンジニア
メール: example@email.com
電話: +976 99999999
`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 hover:text-gray-600"
      title="Copy contact information">
      <BsCopy />
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;
