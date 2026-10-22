import { useEffect, useState } from "react";
import Markdown, { type Components } from "react-markdown";

import { count } from "../analytics";

import {
  projects,
  resolveImage,
  type Project as ProjectData,
} from "../projects";

// Matches the styling the project writeups had as hand-written JSX
const markdownComponents: Components = {
  h2: ({ children }) => <h2 className="text-xl font-normal">{children}</h2>,
  h3: ({ children }) => <h3 className="text-lg font-normal">{children}</h3>,
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-2">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-slate-600 pl-4 space-y-4 text-gray-500 dark:text-gray-300">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    <img
      className="max-w-3/4 mx-auto rounded"
      src={src && resolveImage(src)}
      alt={alt}
    />
  ),
  a: ({ children, href }) => (
    <a className="underline" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

// Lets other sections open a project's modal, e.g. a link in About
export function openProject(slug: string) {
  window.dispatchEvent(new CustomEvent("open-project", { detail: slug }));
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    count({ path: `project-${project.slug}`, title: project.title, event: true });
  };

  useEffect(() => {
    const onOpenProject = (e: Event) => {
      const project = projects.find((p) => p.slug === (e as CustomEvent).detail);
      if (project) openModal(project);
    };
    window.addEventListener("open-project", onOpenProject);
    return () => window.removeEventListener("open-project", onOpenProject);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="pb-4 scroll-mt-6">
      <Modal
        open={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-medium">Projects at varying length</h1>
        {/* <h3 className="text-lg text-gray-500 pb-2">wip</h3> */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {projects.map((proj) => (
            <Project
              key={proj.slug}
              date={proj.date}
              title={proj.title}
              subtitle={proj.subtitle}
              onClick={() => openModal(proj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Project({
  date,
  title,
  subtitle,
  onClick,
}: {
  date: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col gap-x-4 rounded-xl bg-white/20 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 cursor-pointer"
    >
      <h6 className="text-xs text-gray-500 dark:text-gray-300">{date}</h6>
      <h2 className="text-2xl font-medium pb-2">{title}</h2>
      <h4 className="text-sm text-gray-400">{subtitle}</h4>
    </div>
  );
}

function Modal({
  open,
  project,
  onClose,
}: {
  open: boolean;
  project: ProjectData | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open]);

  if (!open || !project) return null;

  const { date, title, tagline, content } = project;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-amber-50 dark:bg-slate-900 p-16 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto overscroll-contain relative shadow-xl"
      >
        <header className="flex justify-between pb-4">
          <div className="flex flex-col items-baseline md:flex-row space-x-4">
            <h1 className="text-2xl font-medium">{title}</h1>
            <h6 className="text-sm text-gray-500 dark:text-gray-300">{date}</h6>
          </div>
          <button onClick={onClose} className="text-lg">
            ✕
          </button>
        </header>
        <main>
          <div className="space-y-4">
            <h4 className="text-base text-gray-400">{tagline}</h4>
            <main className="space-y-4">
              <Markdown components={markdownComponents} skipHtml>
                {content}
              </Markdown>
            </main>
          </div>
        </main>
      </div>
    </div>
  );
}
