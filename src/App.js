import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Aside from "./compnents/aside/Aside";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Service from "./pages/services/Service";
import StyleSwitcher from "./compnents/styleswitcher/Switcher";
import Cirtificates from "./pages/cirtificates/Cirtificates";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Aside />
      <StyleSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cirtificates" element={<Cirtificates />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
