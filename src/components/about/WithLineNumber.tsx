import React from "react";

interface WithLineNumberProps {
  children: React.ReactNode;
  leading?: string;
}

const WithLineNumber: React.FC<WithLineNumberProps> = ({
  children,
  leading: lineHeight = "leading-6", // default line height
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
    <div
      className="relative overflow-auto rounded-md p-3 font-mono"
      style={{ color: "var(--theme-text-gray)" }}
    >
      <div className="flex">
        <div className="min-w-[30px] select-none border-r border-gray-600 pr-4 text-right">
          {paragraphs.map((_, i) => (
            <div key={i} className={lineHeight}>
              {i + 1}
            </div>
          ))}
        </div>
        {/* keep original wrapper classnames */}
        <div className={`flex flex-col pl-3 ${section.props.className}`}>
          {paragraphs.map((paragraph, i) => {
            // 确保段落是一个有效的 React 元素
            if (!React.isValidElement(paragraph)) {
              return null;
            }
            // 克隆元素以保留所有原始属性，包括样式
            return React.cloneElement(paragraph, {
              key: i,
              ...paragraph.props,
              style: {
                ...paragraph.props.style,
                lineHeight: "inherit",
              },
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default WithLineNumber;
