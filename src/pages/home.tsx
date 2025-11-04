import type { LoaderFunctionArgs } from "react-router-dom";
import { About } from "./about";
import Projects from "../components/Projects";

export function meta({}: LoaderFunctionArgs) {
  return [
    { title: "Ashley Li" },
    { name: "description", content: "A personal website" },
  ];
}

export default function Home() {
  return (
    <div>
      <About />
      <Projects />
    </div>
  );
}
