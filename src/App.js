import React, { Routes, Route } from "react-router-dom";
import Contact from "./components/Pages/ContactPage";
import Layout from "./components/Layout";
import Home from "./components/Pages/HomePage";
import Portfolio from "./components/Pages/Portfolio";

import "./sass/styles.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
