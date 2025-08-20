import type { Route } from "./+types/home";
import { About } from "./about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ashley Li" },
    { name: "description", content: "A personal website" },
  ];
}

export default function Home() {
  return <About />;
}
