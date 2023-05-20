import React from "react";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Navbar from "../src/components/Navbar";
import Services from "../src/routes/Services";
import Resume from "./routes/Resume";
import Footer from "../src/components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import UpwardArrow from "./components/UpwardArrow";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="*" element={"No Data Found"} /> */}
      </Routes>

      <UpwardArrow />
      <Footer />
    </>
  );
};

export default App;
