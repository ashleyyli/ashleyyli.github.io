import Typewriter from "typewriter-effect";

import { openProject } from "./Projects";

const taglines = [
  "I try to do things that seem interesting",
  "not sure what to put here",
  "Hello, world!",
  "updog",
];

export default function About() {
  return (
    <div id="about" className="flex flex-col justify-center scroll-mt-6">
      <div className="pb-12">
        <h1 className="text-5xl font-medium mt-10 pb-6">Hi, I'm Ashley</h1>
        {/* Every line sits invisibly in the same grid cell, so the heading is
            always as tall as the longest one wraps to and nothing below jumps */}
        <h4 className="grid text-2xl text-gray-500 pb-8">
          {taglines.map((line) => (
            <span key={line} aria-hidden="true" className="invisible [grid-area:1/1]">
              {line}
            </span>
          ))}
          <span className="[grid-area:1/1]">
            <Typewriter
              options={{
                strings: taglines,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h4>
      </div>

      <div>
        <h1 className="text-3xl font-medium pb-6 space-y-2">
          Escapades in brief
        </h1>

        <p className="text-lg pb-4">
          I'm an undergraduate student in Computer Science and Linguistics at
          the University of Illinois Urbana-Champaign. Currently, I'm an
          ACM@UIUC Infrastructure Co-Chair, overseeing project teams and keeping
          everything running. In fall 2026, I'm taking CS 425
          Distributed Systems!
        </p>

        <p className="text-lg pb-4">
          In summer 2026, I interned at Microsoft designing and implementing user-facing
          diagnostics for Copilot Voice with an awesome team and intern
          cohort.
        </p>

        <p className="text-lg pb-4">
          For the entirety of my freshman and sophomore years, I was a research
          assistant under Professor Lawrence Angrave,{" "}
          <button
            className="underline cursor-pointer"
            onClick={() => openProject("video-segmentation-research")}
          >
            segmenting lecture videos
          </button>{" "}
          for conversion into text-based equivalents.
        </p>

        <p className="text-lg pb-4">
          In my free time, I enjoy listening to music, deliberately taking awful
          pictures, and dreaming of getting a cat.
        </p>
      </div>
    </div>
  );
}
