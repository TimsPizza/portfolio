import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Portfolio",
    imageUrl: "/images/portfolio.jpg",
    description:
      "A personal portfolio website that showcases myself and provides contact functionality.",
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://me.kixstar.xyz",
  },
  {
    title: "Network traffic analyzer",
    description:
      "A full-stack web application for analyzing network traffic and providing statistics.",
    githubUrl:
      "https://github.com/TimsPizza/traffic-monitor-with-webui/tree/dev",
  },
  {
    title: "Blog",
    imageUrl: "/images/blog.jpg",
    description:
      "A blog website to share my writing and thoughts on various topics.",
    githubUrl: "https://github.com/TimsPizza/blog",
    demoUrl: "https://blog.kixstar.xyz",
  },
  {
    title: "Pix2Sheet",
    imageUrl: "/images/pix2sheet.jpg",
    description:
      "A web application that converts user-uploaded tabular images into excel sheets powered by LLM.",
    githubUrl: "https://github.com/TimsPizza/Pix2Sheet",
    demoUrl: "https://i2e.kixstar.xyz",
  },
  {
    title: "Life Daemon",
    imageUrl: "/images/lifedaemon.jpg",
    description:
      "Tired of every-the-same-day? Add some spice to your life with an interesting daily email *just for you!* Powered by LLM.",
    githubUrl: "https://github.com/TimsPizza/life-daemon",
    demoUrl:
      "https://life-daemon.kixstar.xyz/",
  },
  {
    title: "Not-Bot",
    imageUrl: "/images/notbot.jpg",
    description:
      "A discord chat bot with LLM capabilities and auto-decision algorithm. It talks spicy and sharply...",
    demoUrl:
      "https://discord.com/oauth2/authorize?client_id=1362169484072321104",
  },
];

const Projects = () => {
  const { introRef: titleRef, descriptionRef: containerRef } =
    useEntranceAnimation({
      type: "tb",
    });

  return (
    <div className="flex h-full w-full flex-col overflow-auto px-8 py-6">
      {/* Section Title */}
      <div ref={titleRef} className="mb-8">
        <h2
          className="text-2xl font-bold"
          style={{ color: "var(--theme-code-string)" }}
        >
          Featured Projects
        </h2>
        <p
          className="mt-2 text-base"
          style={{ color: "var(--theme-code-comment)" }}
        >
          A collection of projects I built.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))
        ) : (
          <div
            className="col-span-full flex h-[60vh] flex-col items-center justify-center text-center"
            style={{ color: "var(--text-gray)" }}
          >
            <p className="mb-4 text-lg">No projects to display yet.</p>
            <p className="text-sm">Check back soon for updates!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
