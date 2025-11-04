import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx"
import Home from "./pages/home.tsx"; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
    </Routes>
  );
}

