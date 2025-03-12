import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="header-container"
      className="bordered flex h-full w-full flex-row items-center"
    >
      <div className="bordered flex h-full w-72 items-center justify-start">
        <a className="ml-3 inline-block text-code-variable">peisen-jiang</a>
      </div>
      <div className="relative flex h-full flex-1 text-code-comment">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-code-variable" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center transition-colors duration-200 hover:text-code-variable`
          }
          to="/landing"
        >
          hello
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-code-variable" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-code-variable`
          }
          to="/about"
        >
          about me
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-code-variable" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-code-variable`
          }
          to="/projects"
        >
          projects
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "before:active-underline text-code-variable" : ""} bordered relative ml-auto flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-code-variable`
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
