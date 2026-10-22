import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx"
import Home from "./pages/home.tsx"; 
import Resume from "./pages/resume.tsx"
import { useAnalytics } from "./analytics.ts";

export default function App() {
  useAnalytics();

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

