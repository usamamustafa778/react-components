import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import LocationPage from "./Pages/LocationPage";
import ServicesPage from "./Pages/ServicesPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/findlocation" element={<LocationPage />}></Route>
      <Route path="/services" element={<ServicesPage />}></Route>
    </Routes>
  );
}

export default App;
