import React from "react";

const TextWithCheckbox: React.FC<{
  text: string;
  checked: boolean;
  icon: React.ReactNode;
}> = ({ text, checked, icon }) => {
  return (
    <div className="flex flex-row">
      {/* <span className={`bordered h-5 w-5 rounded-md bg-gray-400 bg-opacity-85 ${checked ? "" : ""}`} /> */}
      <span
        className={`bordered relative inline-block h-5 w-5 cursor-pointer select-none rounded before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] ${checked ? "before:block" : "before:hidden"} before:h-2 before:w-3 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-blue-500`}
      ></span>
      <div className="ml-4 flex flex-row items-center text-white">
        <div className="text-text-text-code-comment h-7 w-7 text-xl flex items-center justify-center">{icon}</div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default TextWithCheckbox;
