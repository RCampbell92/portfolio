import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import RenoCalculators from "./components/pages/projects/RenoCalculators";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="portfolio/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Projects */}
          <Route path="/renocalculators" element={<RenoCalculators />} />
          <Route path="/nhill-silos" element={<Contact />} />
          <Route path="/wonky-train" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
