import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="isolate min-h-screen flex flex-col items-center">
      <Blobs />
      <Header />

      <main className="flex flex-grow flex-col items-center justify-center p-6">
        <div className="max-w-[600px] w-full">{children}</div>
      </main>

      <Footer />
    </div>
  );
}

// Faint blurred shapes fixed behind the page, kept toward the edges.
// `isolate` on the Layout root keeps them above the body gradient.
const blobShapes = {
  bean: "M40,30 C80,-10 170,10 175,60 C180,100 140,105 120,130 C100,160 120,195 70,190 C20,185 10,140 25,110 C40,80 10,60 40,30 Z",
  lobed:
    "M100,15 C140,10 160,50 150,75 C140,100 190,110 180,150 C170,190 120,185 100,165 C80,145 50,195 25,165 C0,135 40,110 35,85 C30,55 60,20 100,15 Z",
  streak:
    "M15,120 C30,70 90,60 130,35 C165,15 195,30 185,60 C175,95 130,100 100,130 C70,160 40,185 20,170 C5,160 8,140 15,120 Z",
  dented:
    "M60,20 C100,0 150,30 140,70 C135,90 175,95 180,130 C185,170 140,190 105,175 C80,165 70,185 40,175 C10,165 15,125 30,105 C45,85 25,40 60,20 Z",
  hook: "M30,40 C70,10 150,20 170,60 C185,90 160,100 130,95 C95,90 80,120 95,150 C110,180 70,195 45,175 C15,150 40,120 30,95 C22,75 5,58 30,40 Z",
};

function Blob({
  shape,
  className,
}: {
  shape: keyof typeof blobShapes;
  className: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      className={`absolute blur-[32px] ${className}`}
    >
      <path d={blobShapes[shape]} />
    </svg>
  );
}

function Blobs() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <Blob
        shape="bean"
        className="-top-[7vh] -left-[5vw] h-[45vh] w-[45vw] -rotate-12 fill-orange-300/10 dark:fill-emerald-500/5"
      />
      <Blob
        shape="lobed"
        className="top-[28vh] -right-[9vw] h-[55vh] w-[36vw] rotate-[25deg] fill-pink-300/10 dark:fill-purple-500/5"
      />
      <Blob
        shape="streak"
        className="-bottom-[5vh] left-[8vw] h-[38vh] w-[55vw] rotate-6 fill-pink-200/14 dark:fill-purple-400/5"
      />
      <Blob
        shape="dented"
        className="-bottom-[7vh] -right-[2vw] h-[32vh] w-[30vw] -rotate-[30deg] fill-orange-200/14 dark:fill-emerald-400/5"
      />
      <Blob
        shape="streak"
        className="-top-[2vh] right-[8vw] h-[28vh] w-[34vw] -rotate-[40deg] -scale-x-100 fill-pink-300/10 dark:fill-purple-500/5"
      />
      <Blob
        shape="hook"
        className="top-[42vh] -left-[9vw] h-[42vh] w-[30vw] rotate-[15deg] fill-orange-200/14 dark:fill-emerald-500/5"
      />
    </div>
  );
}

const sections = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "webring", label: "webring" },
];

// HashRouter owns the URL hash, so "#about"-style anchors would be treated as
// routes. Scroll manually instead, going back to the homepage first if needed.
function SectionLink({ id, children }: { id: string; children: React.ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <button
      className="hover:underline cursor-pointer"
      onClick={() => {
        if (pathname === "/") {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/", { state: { scrollTo: id } });
        }
      }}
    >
      {children}
    </button>
  );
}

// Finishes a SectionLink click that started on another page.
function useScrollToSection() {
  const { state } = useLocation();

  useEffect(() => {
    const id = (state as { scrollTo?: string } | null)?.scrollTo;
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [state]);
}

function Header() {
  useScrollToSection();

  return (
    <header className="text-sm w-full flex justify-center px-6 py-4">
      <nav className="flex flex-row justify-between items-center w-full max-w-[600px]">
        <Link className="text-2xl" to="/" title="Ashley Li">
          Ashley Li
        </Link>
        <div className="flex justify-center items-center gap-6">
          {sections.map(({ id, label }) => (
            <SectionLink key={id} id={id}>
              {label}
            </SectionLink>
          ))}
          <Link
            className="hover:underline"
            to="/resume"
            title="Ashley Li's Resume"
          >
            resume
          </Link>
          <DisplayToggle />
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="text-sm min-h-32 py-4 px-6 flex flex-col justify-center w-full max-w-[648px]">
      <h6 className="text-lg font-normal pb-2">Contact</h6>
      <div className="flex justify-between space-x-6">
        <div className="flex flex-wrap items-center gap-x-2">
          <a
            className="hover:underline"
            href="mailto:ashley.yashi.li@gmail.com"
          >
            ashley.yashi.li@gmail.com
          </a>
          <span>/</span>
          <a className="hover:underline" href="mailto:ashleyl7@illinois.edu">
            ashleyl7@illinois.edu{" "}
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ashleyyli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
            title="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashleyyli/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function DisplayToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded text-yellow-500 dark:text-gray-200"
    >
      {darkMode ? (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25
              m6.364.386-1.591 1.591
              M21 12h-2.25
              m-.386 6.364-1.591-1.591
              M12 18.75V21
              m-4.773-4.227-1.591 1.591
              M5.25 12H3
              m4.227-4.773L5.636 5.636
              M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0
              Z"
          />
        </svg>
      ) : (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002
              A9.72 9.72 0 0 1 18 15.75
              c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752
              A9.753 9.753 0 0 0 3 11.25
              C3 16.635 7.365 21 12.75 21
              a9.753 9.753 0 0 0 9.002-5.998
              Z"
          />
        </svg>
      )}
    </button>
  );
}
