import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="header-container"
      className="bordered flex h-full w-full flex-row items-center"
    >
      <div className="bordered flex h-full w-1/5 items-center justify-start">
        <a className="ml-2 text-code-variable">peisen-jiang</a>
      </div>
      <div className="relative flex h-full flex-1 text-text-gray">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-text-light" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center  transition-colors duration-200 hover:text-text-light`
          }
          to="/landing"
        >
          hello
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-text-light" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-text-light`
          }
          to="/about"
        >
          about me
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-text-light" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-text-light`
          }
          to="/projects"
        >
          projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-text-light" : ""} bordered relative ml-auto flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-text-light`
          }
          to="/contact"
        >
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
