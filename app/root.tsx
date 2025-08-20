import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const theme = localStorage.getItem("theme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (theme === "dark" || (!theme && systemDark)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <body className="min-h-screen flex flex-col">
      <header className="p-6 bg-amber-100/11 dark:bg-slate-950/20">
        <nav className="flex flex-col md:flex-row items-center justify-between">
          <a className="text-3xl" href="ashleyyli.github.io" title="Ashley Li">
            Ashley Li
          </a>
          <div className="flex items-center space-x-4">    
            <a className="hover:underline" href="/" title="About">
              About
            </a>

            <span>/</span>

            <a className="hover:underline" href="/projects" title="Projects">
              Projects
            </a>
            
            {/* <span>/</span>
            
            <a className="hover:underline" href="/resume" title="Resume">
              Resume
            </a> */}

            <DisplayToggle />
          </div>
        </nav>
        
      </header>

      {/* <hr /> */}

      <main className="flex flex-grow items-center justify-center p-6">
        <div className="max-w-[700px] w-full">
          <Outlet />
        </div>
      </main>

      {/* <hr /> */}

      <footer className="h-32 p-4 flex flex-col justify-center">
        <h6 className="text-xl pb-2">Contact {'\u{1F440}'}</h6>
        <div className="flex justify-between space-x-6">
          <div className="flex items-center space-x-2">
            <a className="hover:underline" href="mailto:ashley.yashi.li@gmail.com">ashley.yashi.li@gmail.com</a>
            <div className="span">/</div>
            <a className="hover:underline" href="mailto:ashleyl7@illinois.edu">ashleyl7@illinois.edu </a>
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
              title="Linkedin"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </body>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

function DisplayToggle() {
  const [darkMode, setDarkMode] = useState(() => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  return false; // Default to light mode during SSR
});

  useEffect(() => {
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
              Z" />
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
              Z" />
        </svg>

      )}
    </button>
  );
};