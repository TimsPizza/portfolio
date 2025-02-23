import React from "react";

const Header = () => {
  return (
    <div
      id="header-container"
      className="bordered flex h-full w-full flex-row items-center"
    >
      <div className="bordered flex h-full w-1/6 items-center justify-start">
        <span className="text-code-variable">@peisen-jiang</span>
      </div>
      <div className="text-text-gray relative flex h-full flex-1">
        <span className="text-text-light hover:text-text-light before:active-underline bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200">
          _hello
        </span>
        <span className="hover:text-text-light bordered relative flex min-w-28 cursor-pointer items-center justify-center p-4 transition-colors duration-200">
          _about_me
        </span>
        <span className="hover:text-text-light bordered relative flex min-w-28 cursor-pointer items-center justify-center p-4 transition-colors duration-200">
          _projects
        </span>
        <span className="hover:text-text-light bordered relative flex min-w-28 cursor-pointer items-center justify-center p-4 transition-colors duration-200 ml-auto text-code-variable">
          _contact
        </span>
      </div>
    </div>
  );
};

export default Header;
