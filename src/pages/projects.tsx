import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

	const projectData = [
    { date: "4 june 2025", title: "this website!", subtitle: "since i felt my frontend skills needed work", Content: PersonalWebsiteProjectContent },
    // more...
  ];

	return (
		<div>
			<Modal
				open={isModalOpen}
				project={selectedProject}
				onClose={closeModal}
			/>
			<div className="space-y-4">
				<h1 className="text-4xl font-bold">Projects</h1>
				<h3 className="text-xl text-gray-500 pb-8">I'm not sure how consistently I'll update this</h3>
				{/* <p className="pb-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p> */}
				<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
					{projectData.map((proj, idx) => (
						<Project key={idx} {...proj} onClick={() => openModal(proj)} />
					))}
				</div>
			</div>
		</div>
		
	);
};

function Project({ date, title, subtitle, onClick}: {
  date: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}) {	return (
		<div 
			onClick={onClick}
			className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col gap-x-4 rounded-xl bg-white/20 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 cursor-pointer">
			<h6 className="text-sm text-gray-500 dark:text-gray-300">{date}</h6>
			<h2 className="text-3xl font-bold pb-2">{title}</h2>
			<h4 className="text-gray-400">{subtitle}</h4>
		</div>
	);
};

function Modal({ 
	open, 
	project, 
	onClose 
}: { 
	open: boolean; 
	project: { date: string; title: string; subtitle: string, Content: string } | null;
	onClose: () => void 
}) {
	if (!open || !project) return null;

  const { date, title, subtitle, Content } = project;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="bg-amber-50 dark:bg-slate-900 p-16 rounded-lg max-w-4xl w-full relative shadow-xl">
				<header className="flex justify-between pb-4">
					<div className="flex flex-col items-baseline md:flex-row space-x-4">
						<h1 className="text-3xl font-bold">{title}</h1>
						<h6 className="text-gray-500 dark:text-gray-300">{date}</h6>
					</div>
					<button onClick={onClose} className="text-xl">✕</button>
				</header>
				<main>
					{Content && <Content />}
				</main>
      </div>
    </div>
  );
}



// ====== wasteland ======

function PersonalWebsiteProjectContent() {
	return (
    <div className="space-y-4">
      <h4 className="text-lg text-gray-400">
        i wanted a quick way to practice my frontend skills, and i kind of wanted a personal website, so i made this.
      </h4>
      <main className="space-y-4">
        <p>
          my general goals were to make this website lightweight, simple, and easy to navigate.  simultaneously, i wanted it to 
          host some degree of information without walls of text everywhere: thus pages and modals.  since i wanted to host this 
          on GitHub Pages, this website is static.  while the content is just written into the project file--making the code a 
          bit messy--i figured the amount of data was small enough and that it was convenient enough that the consequences were 
          not too significant.
        </p>
        <p> some points: </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>built this from scratch (with a React Router starter template)</li>
            <li>written with React.js and Tailwind CSS</li>
            <li>remembered how hard of a time i have writing about myself</li>
            <li>bullet point 4</li>
          </ul>
        <p>
          there is more to do with clearning up the code and maybe adding a resume page, but it is hopefully ok for now.
        </p>
      </main>
    </div>
	);
}