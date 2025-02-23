import React from "react";
import {
  VscFiles,
  VscGitMerge,
  VscExtensions,
  VscSettingsGear,
  VscAccount,
} from "react-icons/vsc";
import Collapsable from "./Collapsable";
import { FaEnvelope, FaFolder, FaGithub, FaUniversity } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div id="sidebar-container" className="flex h-full w-full flex-row">
      <div
        id="sidebar-icons"
        className="bordered flex h-full w-1/4 flex-col items-center gap-4 py-4"
      >
        <VscFiles className="h-7 w-7 cursor-pointer text-code-comment transition-colors duration-200 hover:text-code-variable" />
        <VscGitMerge className="h-7 w-7 cursor-pointer text-code-comment transition-colors duration-200 hover:text-code-variable" />
        <VscExtensions className="h-7 w-7 cursor-pointer text-code-comment transition-colors duration-200 hover:text-code-variable" />
        <div className="mt-auto flex flex-col gap-4">
          <VscAccount className="h-7 w-7 cursor-pointer text-code-comment transition-colors duration-200 hover:text-code-variable" />
          <VscSettingsGear className="h-7 w-7 cursor-pointer text-code-comment transition-colors duration-200 hover:text-code-variable" />
        </div>
      </div>
      <div
        id="sidebar-content"
        className="flex h-full flex-1 flex-col text-code-comment"
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
              ml="ml-2"
              indicator={<FaFolder />}
            />
            <Collapsable
              id="interests"
              title="interests"
              ml="ml-2"
              indicator={<FaFolder />}
            />
            <Collapsable
              id="education"
              title="education"
              ml="ml-2"
              indicator={<FaFolder />}
            >
              <div className="mb-2 ml-2 flex flex-row items-center px-2">
                <FaUniversity className="h-4 w-4 text-code-variable" />
                <span className="ml-2 text-code-variable">my-university</span>
              </div>
            </Collapsable>
          </Collapsable>
        </div>
        <div className="flex-1">
          <Collapsable id="contact-info" title="contact-info" bordered>
            <div className="my-1 ml-2 flex cursor-pointer flex-row items-center px-2">
              <FaEnvelope className="h-4 w-4 text-code-variable" />
              <span className="ml-2 text-code-variable">my-email</span>
            </div>
            <div className="my-1 ml-2 flex cursor-pointer flex-row items-center px-2">
              <FaGithub className="h-4 w-4 text-code-variable" />
              <span className="ml-2 text-code-variable">my-github</span>
            </div>
          </Collapsable>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
