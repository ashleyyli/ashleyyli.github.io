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
				<h3 className="text-xl text-gray-500"> it is questionable as to whether i put anything here</h3>
				<p className="pb-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
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
			className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col gap-x-4 rounded-xl bg-white/20 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
			<h6 className="text-sm text-gray-500 dark:text-gray-300">{date}</h6>
			<h2 className="text-3xl font-bold">{title}</h2>
			<h4 className="text-gray-600">{subtitle}</h4>
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
      <h1 className="text-2xl font-bold">header!</h1>
      <h4 className="text-lg text-gray-500">
        {/* <Typewriter options={{
          strings: ['test1', 'yup', 'Hello, world!', 'another greeting would be too much', 'updog'],
          autoStart: true,
          loop: true
        }} /> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h4>
      <main className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p> bullet points: </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>bullet point 1</li>
          <li>bullet point 2</li>
          <li>bullet point 3</li>
          <li>bullet point 4</li>
        </ul>
				<p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
  </div>
	);
}