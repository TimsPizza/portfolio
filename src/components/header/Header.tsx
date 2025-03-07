import React from "react";

const Header = () => {
  return (
    <div
      id="header-container"
      className="bordered flex h-full w-full flex-row items-center"
    >
      <div className="bordered flex h-full w-1/5 items-center justify-start">
        <span className="ml-2 text-code-variable">peisen-jiang</span>
      </div>
      <div className="relative flex h-full flex-1 text-text-gray">
        <span className="before:active-underline bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 text-text-light transition-colors duration-200 hover:text-text-light">
          _hello
        </span>
        <span className="bordered relative flex min-w-28 cursor-pointer items-center justify-center p-4 transition-colors duration-200 hover:text-text-light">
          _about_me
        </span>
        <span className="bordered relative flex min-w-28 cursor-pointer items-center justify-center p-4 transition-colors duration-200 hover:text-text-light">
          _projects
        </span>
        <span className="bordered relative ml-auto flex min-w-28 cursor-pointer items-center justify-center p-4 text-code-variable transition-colors duration-200 hover:text-text-light">
          _contact
        </span>
      </div>
    </div>
  );
};

export default Header;
