import React, { useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

import gsap from "gsap";

export interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 初始状态设置
    timeline.set(cardRef.current, {
      opacity: 0,
      y: 20,
    });

    // 卡片入场动画
    timeline.to(cardRef.current, {
      opacity: 1,
      y: 0,
      ease: "power1.in",
      duration: 0.2,
      delay: 0.2 + index * 0.2,
    });

    return () => {
      timeline.kill();
    };
  }, [index, project.imageUrl]);

  return (
    <div
      ref={cardRef}
      className="group relative flex h-80 flex-col overflow-hidden rounded-xl bg-gray-100 bg-opacity-5 transition-all duration-300"
    >
      {/* Content section */}
      <div
        ref={contentRef}
        className="flex flex-grow flex-col p-4 transition-transform duration-300"
      >
        {/* Project Title */}
        <h3
          className="mb-3 text-xl font-bold"
          style={{ color: "var(--theme-code-tag)" }}
        >
          {project.title}
        </h3>

        {/* Fixed height image container */}
        <div className="relative h-32 w-full overflow-hidden">
          {project.imageUrl ? (
            <img
              src={project.imageUrl || "https://via.placeholder.com/150"}
              alt={project.title}
              className="h-full w-full rounded-lg object-fill"
            />
          ) : (
            <div className="bordered flex h-full w-full items-center justify-center text-center">
              {`Under construction`}
            </div>
          )}
        </div>

        {/* Project Description */}
        <p
          className="flex flex-grow items-center text-base"
          style={{ color: "var(--text-gray)" }}
        >
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:!text-[color:var(--theme-code-string)]"
              style={{ color: "var(--text-gray)" }}
            >
              <FaGithub
                className="h-5 w-5"
                style={{ color: "var(--text-gray)" }}
              />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:!text-[color:var(--theme-code-string)]"
              style={{ color: "var(--text-gray)" }}
            >
              <CiShare1
                className="h-5 w-5"
                style={{ color: "var(--text-gray)" }}
              />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
