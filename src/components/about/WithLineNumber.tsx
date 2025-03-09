import React from "react";

const WithLineNumber: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const section = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === "section",
  ) as React.ReactElement;

  const paragraphs = section
    ? React.Children.toArray(
        (section as React.ReactElement).props.children,
      ).filter((child) => React.isValidElement(child) && child.type === "p")
    : [];

  return (
    <div className="relative overflow-auto rounded-md p-3 font-mono text-white">
      <div className="flex">
        <div className="min-w-[30px] select-none border-r border-gray-600 pr-4 text-right text-code-comment">
          {paragraphs.map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        {/* keep original wrapper classnames */}
        <div className={`flex flex-col pl-3 ${section.props.className}`}>
          {paragraphs.map((paragraph, i) => (
            <>{paragraph}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WithLineNumber;
