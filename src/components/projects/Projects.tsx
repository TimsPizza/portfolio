import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Portfolio",
    imageUrl: "/images/portfolio.jpg",
    description:
      'Yeah, the one you\'re staring at right now. Did you "like" it? Did you???🤨',
    githubUrl: "https://github.com/TimsPizza/portfolio",
    demoUrl: "https://me.kixstar.xyz",
  },
  {
    title: "SwiftPan",
    imageUrl: "/images/swiftpan.png",
    description:
      "A cross-platform light, fast s3-storage-based cloud drive app. Free! Privacy! Open-source! (I love you cloudflare)",
    githubUrl: "https://github.com/TimsPizza/SwiftPan",
    demoUrl: "https://github.com/TimsPizza/SwiftPan",
  },
  {
    title: "FlowExcel",
    imageUrl: "/images/flowexcel.png",
    description:
      'A hybrid-architecture desktop app for complex excel data analysis simply by "draging-and-droping", along with realtime preview. You will never find any excisting tools support per-step preview as it does. No-code and 0-learning-curve. You will love it. (Took me a few months tho..)',
    githubUrl: "https://github.com/TimsPizza/FlowExcel",
    demoUrl: "https://github.com/TimsPizza/FlowExcel/releases/tag/v0.1.0",
  },
  {
    title: "Blog",
    imageUrl: "/images/blog.jpg",
    description:
      "My blog website (Don't expect too much tho, I don't really enjoy writing).",
    githubUrl: "https://github.com/TimsPizza/blog",
    demoUrl: "https://blog.kixstar.xyz",
  },
  {
    title: "Pix2Sheet",
    imageUrl: "/images/pix2sheet.jpg",
    description:
      'A web application that converts user-uploaded tabular images into excel sheets powered by LLM. ("Very useful", my mom said.)',
    githubUrl: "https://github.com/TimsPizza/Pix2Sheet",
    demoUrl: "https://i2e.kixstar.xyz",
  },
  {
    title: "Life Daemon",
    imageUrl: "/images/lifedaemon.jpg",
    description:
      'Tired of every-the-same-day? Add some spice to your life with an interesting daily email *just for you!* Powered by LLM. ("This is just like a harassment, right?" - my friends)',
    githubUrl: "https://github.com/TimsPizza/life-daemon",
    demoUrl: "https://life-daemon.kixstar.xyz/",
  },
  {
    title: "Not-Bot",
    imageUrl: "/images/notbot.jpg",
    description:
      'A discord chat bot with LLM capabilities and auto-decision algorithm. It talks spicy and sharply... ("Hey I do like the chat summary function tho, but sometimes it gets really annoying. - also my friends")',
    demoUrl:
      "https://discord.com/oauth2/authorize?client_id=1362169484072321104",
    githubUrl: "https://github.com/TimsPizza/not-bot",
  },
  {
    title: "Network traffic analyzer",
    description:
      "A full-stack web application for analyzing network traffic and providing statistics. (Not finished yet as I found the core part written in python is wayyyyy too slow that I'm preparing to rewrite it in rust someday).",
    githubUrl:
      "https://github.com/TimsPizza/traffic-monitor-with-webui/tree/dev",
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
      <div ref={titleRef} className="">
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
        className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
