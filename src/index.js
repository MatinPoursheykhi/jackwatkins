import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Commons/header";
import Home from "./Home/home";
import About from "./About/about";
import Services from "./Services/services";
import Contact from "./Contact/contact";

function Final() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Header />}>
          <Route element={<Home />} index />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Final />);

reportWebVitals();
