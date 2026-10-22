import About from "../components/About";
import Projects from "../components/Projects";
import WebRing from "../components/WebRing";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-y-16 py-12">
      <About />
      <Projects />
      <WebRing />
    </div>
  );
}
