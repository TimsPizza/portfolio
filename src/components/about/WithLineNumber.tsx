import React, { useEffect, useRef, useState } from "react";

interface WithLineNumberProps {
  children: React.ReactNode;
  leading?: string;
}

const WithLineNumber: React.FC<WithLineNumberProps> = ({
  children,
  leading: lineHeightClass = "leading-6", // default line height
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(0);

  // Extract the section and paragraphs as before
  const section = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === "section",
  ) as React.ReactElement;

  const paragraphs = section
    ? React.Children.toArray(
        (section as React.ReactElement).props.children,
      ).filter((child) => React.isValidElement(child) && child.type === "p")
    : [];

  // Map line height classes to pixel values (approximation)
  const lineHeightMap: Record<string, number> = {
    "leading-3": 12,
    "leading-4": 16,
    "leading-5": 20,
    "leading-6": 24,
    "leading-7": 28,
    "leading-8": 32,
    "leading-9": 36,
    "leading-10": 40,
    // Add more mappings as needed
  };

  // Default to 24px if the lineHeightClass is not in the map
  const lineHeightPx = lineHeightMap[lineHeightClass] || 24;

  useEffect(() => {
    if (!contentRef.current) return;

    // Calculate actual line count based on element height
    // Wow, this is a lot of work for a line count and took me a while to figure out...
    const calculateLineCount = () => {
      if (!contentRef.current) return;

      // Get all the rendered paragraph elements
      const paragraphElements = contentRef.current.querySelectorAll("p");
      let totalLines = 0;

      // For each paragraph, calculate its line count
      paragraphElements.forEach((paragraph) => {
        const height = paragraph.offsetHeight;
        // Add the number of lines in this paragraph
        totalLines += Math.ceil(height / lineHeightPx);
      });

      setLineCount(totalLines > 0 ? totalLines : paragraphs.length);
    };

    // Initial calculation
    calculateLineCount();

    // Recalculate when window resizes
    const handleResize = () => {
      calculateLineCount();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [paragraphs.length, lineHeightPx]);

  return (
    <div
      className="relative overflow-auto rounded-md p-3 font-mono"
      style={{ color: "var(--theme-text-gray)" }}
    >
      <div className="flex">
        <div className="min-w-[30px] select-none border-r border-gray-600 pr-4 text-right">
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} className={lineHeightClass}>
              {i + 1}
            </div>
          ))}
        </div>
        {/* keep original wrapper classnames */}
        <div
          ref={contentRef}
          className={`flex flex-col pl-3 ${section?.props?.className || ""}`}
          style={{ lineHeight: `${lineHeightPx}px` }}
        >
          {paragraphs.map((paragraph, i) => {
            // make sure it is valid jsx
            if (!React.isValidElement(paragraph)) {
              return null;
            }
            // to keep all original props
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
