import React from "react";
import { VscChevronDown } from "react-icons/vsc";

interface ICollapsableProps {
  id?: string;
  title: string;
  children?: React.ReactNode;
  bordered?: boolean;
  default?: "collapsed" | "expanded";
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  indicator?: React.ReactNode;
  activeColor?: string;
  defaultColor?: string;
}

const Collapsable: React.FC<ICollapsableProps> = ({
  id,
  title,
  children,
  bordered = false,
  default: initialState = "collapsed",
  ml = "",
  mr = "",
  mt = "",
  mb = "",
  indicator,
  defaultColor = "text-code-comment",
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(
    initialState === "collapsed",
  );

  return (
    <div
      id={id ?? `${title}-collapsable`}
      className={`flex h-full w-full flex-col ${bordered ? "bordered" : ""} ${ml} ${mr} ${mt} ${mb}`}
    >
      <div
        id="indicator"
        className={`${
          bordered ? "bordered" : ""
        } relative flex w-full cursor-pointer items-center p-1 text-${defaultColor} text-opacity-80 transition-colors duration-200 hover:text-opacity-100 ${isCollapsed ? "text-opacity-80" : "!text-opacity-100"}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {indicator ? (
          indicator
        ) : (
          <VscChevronDown
            className={`transition-transform duration-200 ${
              isCollapsed ? "-rotate-90" : ""
            }`}
          />
        )}

        <span
          className={`ml-2 ${defaultColor === "text-code-comment" ? (isCollapsed ? "" : "text-white") : ""}`}
        >
          {title}
        </span>
      </div>
      {children && (
        <div
          id="collapsable"
          className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
            isCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
          }`}
        >
          <div className="flex h-full w-full flex-col overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapsable;
