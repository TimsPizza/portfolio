import React from "react";
import { VscChevronDown } from "react-icons/vsc";

interface ICollapsableProps {
  id?: string;
  title: string;
  children?: React.ReactNode;
  bordered?: boolean;
  default?: "collapsed" | "expanded";
  ml?: string;
  indicator?: React.ReactNode;
}

const Collapsable: React.FC<ICollapsableProps> = ({
  id,
  title,
  children,
  bordered = false,
  default: initialState = "collapsed",
  ml = "",
  indicator,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(
    initialState === "collapsed",
  );

  return (
    <div
      id={id ?? `${title}-collapsable`}
      className={`flex h-full w-full flex-col ${bordered ? "bordered" : ""} ${ml}`}
    >
      <div
        id="indicator"
        className={`${
          bordered ? "bordered" : ""
        } relative flex w-full cursor-pointer items-center p-2 transition-colors duration-200 hover:text-white ${isCollapsed ? "" : "text-white"}`}
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

        <span className="ml-2">{title}</span>
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
