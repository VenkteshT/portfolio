import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Aside from "./compnents/aside/Aside";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Service from "./pages/services/Service";
function App() {
  return (
    <div className="App">
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
