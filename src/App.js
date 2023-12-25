import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Gallery from "./routes/Gallery";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";







function App() {
  return (
      <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
      </>
  );
}

export default App;
