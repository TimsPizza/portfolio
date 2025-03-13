import React from "react";

const TextWithCheckbox: React.FC<{
  text: string;
  checked: boolean;
  icon: React.ReactNode;
}> = ({ text, checked, icon }) => {
  return (
    <div className="flex flex-row">
      <span
        className={`relative inline-block h-5 min-h-5 w-5 min-w-5 cursor-pointer select-none rounded border border-code-comment before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] ${checked ? "before:block" : "before:hidden"} before:h-2 before:w-3 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-blue-500`}
      ></span>
      <div className="ml-4 flex flex-row flex-wrap items-center text-white">
        <div
          className="flex h-7 w-7 items-center justify-center text-xl"
          style={{ color: "var(--theme-code-comment)" }}
        >
          {icon}
        </div>
        <span style={{ color: "var(--theme-code-string)" }}>{text}</span>
      </div>
    </div>
  );
};

export default TextWithCheckbox;
