import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="header-container"
      className="bordered flex h-full w-full flex-row items-center"
    >
      <div className="bordered flex h-full items-center justify-start lg:w-72">
        <a 
          className="ml-3 inline-block"
          style={{ color: "var(--theme-code-variable)" }}
        >
          peisen-jiang
        </a>
        <div className="ml-auto lg:hidden">
          <MobileNav isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <div 
        className="relative hidden h-full flex-1 lg:flex"
        style={{ color: "var(--theme-code-comment)" }}
      >
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "var(--theme-code-variable)" : "inherit",
          })}
          className={({ isActive }) =>
            `${isActive ? "before:active-underline" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center transition-colors duration-200 hover:text-[var(--theme-code-variable)]`
          }
          to="/landing"
        >
          hello
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "var(--theme-code-variable)" : "inherit",
          })}
          className={({ isActive }) =>
            `${isActive ? "before:active-underline" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-[var(--theme-code-variable)]`
          }
          to="/about"
        >
          about me
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "var(--theme-code-variable)" : "inherit",
          })}
          className={({ isActive }) =>
            `${isActive ? "before:active-underline" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-[var(--theme-code-variable)]`
          }
          to="/projects"
        >
          projects
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "var(--theme-code-variable)" : "inherit",
          })}
          className={({ isActive }) =>
            `${isActive ? "before:active-underline" : ""} bordered relative ml-auto flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-[var(--theme-code-variable)]`
          }
          to="/contact"
        >
          contact
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "var(--theme-code-variable)" : "inherit",
          })}
          className={({ isActive }) =>
            `${isActive ? "before:active-underline" : ""} bordered relative flex min-w-28 cursor-pointer items-center justify-center p-3 transition-colors duration-200 hover:text-[var(--theme-code-variable)]`
          }
          to="/themes"
        >
          themes
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
