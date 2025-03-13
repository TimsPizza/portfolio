import { FaCode, FaEnvelope, FaFolder, FaUniversity } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { GiBowman, GiConsoleController } from "react-icons/gi";
import { IoMdMale } from "react-icons/io";
import { MdFactCheck, MdOutlinePhone } from "react-icons/md";
import {
  VscAccount,
  VscExtensions,
  VscFiles,
  VscGitMerge,
  VscSettingsGear,
} from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import Collapsable from "./Collapsable";

const Sidebar = () => {
  return (
    <div id="sidebar-container" className="flex h-full w-full flex-row">
      <div
        id="sidebar-icons"
        className="bordered flex h-full w-14 flex-col items-center gap-4 py-4"
      >
        <NavLink
          to="/landing"
          style={({ isActive }) => ({
            color: isActive
              ? "var(--theme-code-variable)"
              : "var(--theme-code-comment)",
          })}
          className="transition-colors duration-200 hover:text-[var(--theme-code-variable)]"
        >
          <VscFiles className="h-7 w-7 cursor-pointer" />
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive
              ? "var(--theme-code-variable)"
              : "var(--theme-code-comment)",
          })}
          className="transition-colors duration-200 hover:text-[var(--theme-code-variable)]"
        >
          <VscGitMerge className="h-7 w-7 cursor-pointer" />
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => ({
            color: isActive
              ? "var(--theme-code-variable)"
              : "var(--theme-code-comment)",
          })}
          className="transition-colors duration-200 hover:text-[var(--theme-code-variable)]"
        >
          <VscExtensions className="h-7 w-7 cursor-pointer" />
        </NavLink>
        <div className="mt-auto flex flex-col gap-4">
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive
                ? "var(--theme-code-variable)"
                : "var(--theme-code-comment)",
            })}
            className="transition-colors duration-200 hover:text-[var(--theme-code-variable)]"
          >
            <VscAccount className="h-7 w-7 cursor-pointer" />
          </NavLink>
          <NavLink
            to="/themes"
            style={({ isActive }) => ({
              color: isActive
                ? "var(--theme-code-variable)"
                : "var(--theme-code-comment)",
            })}
            className="transition-colors duration-200 hover:text-[var(--theme-code-variable)]"
          >
            <VscSettingsGear className="h-7 w-7 cursor-pointer" />
          </NavLink>
        </div>
      </div>
      <div
        id="sidebar-content"
        className="flex h-full flex-1 flex-col"
        style={{ color: "var(--theme-code-comment)" }}
      >
        <div>
          <Collapsable
            id="personal-info"
            title="personal-info"
            bordered
            default="expanded"
          >
            <Collapsable
              id="bio"
              title="bio"
              ml="ml-4"
              defaultColor="var(--theme-code-string)"
              indicator={<FaFolder />}
            >
              <div className="my-1 ml-1 flex flex-row items-center px-2 text-sm transition-colors duration-100 hover:text-[var(--theme-code-variable)]">
                <FaCakeCandles className="inline-block h-4 w-4 flex-shrink-0" />
                <span className="ml-2" title="my birthday">
                  Sept 11, 2001
                </span>
              </div>
              <div className="my-1 ml-1 flex flex-row items-center px-2 text-sm transition-colors duration-100 hover:text-[var(--theme-code-variable)]">
                <IoMdMale className="inline-block h-4 w-4 flex-shrink-0" />
                <span className="ml-2">Male</span>
              </div>
              <div className="my-1 ml-1 flex flex-row items-center px-2 text-sm transition-colors duration-100 hover:text-[var(--theme-code-variable)]">
                <MdFactCheck className="inline-block h-4 w-4 flex-shrink-0" />
                <span className="ml-2" title="my nickname">
                  timspizza
                </span>
              </div>
            </Collapsable>
            <Collapsable
              id="interests"
              title="interests"
              ml="ml-4"
              indicator={<FaFolder />}
              defaultColor="var(--theme-code-keyword)"
            >
              <div className="my-1 ml-1 flex flex-row items-center px-2 text-sm transition-colors duration-100 hover:text-[var(--theme-code-variable)]">
                <FaCode className="inline-block h-4 w-4 flex-shrink-0" />
                <span className="ml-2">coding</span>
              </div>
              <div className="my-1 ml-1 flex flex-row items-center px-2 text-sm transition-colors duration-100 hover:text-[var(--theme-code-variable)]">
                <GiConsoleController className="inline-block h-4 w-4 flex-shrink-0" />
                <span className="ml-2">gaming</span>
              </div>
              <div className="my-1 ml-1 flex flex-row items-center px-2 text-sm transition-colors duration-100 hover:text-[var(--theme-code-variable)]">
                <GiBowman className="inline-block h-4 w-4 flex-shrink-0" />
                <span className="ml-2">archery</span>
              </div>
            </Collapsable>
            <Collapsable
              id="education"
              title="education"
              ml="ml-4"
              indicator={<FaFolder />}
              defaultColor="var(--theme-code-number)"
            >
              <div className="mb-2 ml-2 flex flex-row items-center px-2 tracking-tight transition-colors duration-100 hover:text-[var(--theme-code-variable)]">
                <FaUniversity className="mt-1 h-4 w-4 self-start" />
                <span className="ml-2 text-sm">University of Lethbridge</span>
              </div>
            </Collapsable>
          </Collapsable>
        </div>
        <div className="flex-1">
          <Collapsable
            id="contact-info"
            title="contact-info"
            bordered
            default="expanded"
          >
            <div
              className="my-1 -ml-4 flex scale-75 cursor-pointer flex-row items-center px-2 transition-colors duration-100 hover:text-[var(--theme-code-variable)] hover:brightness-125"
              style={{ color: "var(--theme-code-variable)" }}
            >
              <FaEnvelope className="inline-block h-4 w-4 flex-shrink-0" />
              <span className="ml-2">peisen.jiang2001@gmail.com</span>
            </div>
            <div
              className="my-1 -ml-4 flex scale-75 cursor-pointer flex-row items-center px-2 transition-colors duration-100 hover:text-[var(--theme-code-variable)] hover:brightness-125"
              style={{ color: "var(--theme-code-variable)" }}
            >
              <MdOutlinePhone className="h-4 w-4" />
              <span className="ml-2">1-403-929-7693</span>
            </div>
          </Collapsable>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
