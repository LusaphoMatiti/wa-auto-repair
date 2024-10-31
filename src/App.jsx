import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import Contact from "./components/ContactUs";
import Services from "./components/Services";
import About from "./components/AboutUs";
import Navbar from "./components/parts/Navbar";
import Footer from "./components/parts/Footer";
import ContactInfo from "./components/parts/ContactInfo";
import Brakes from "./components/Services/Brakes";
import Clutches from "./components/Services/Clutches";
import Engine from "./components/Services/Engine";
import Elec from "./components/Services/Elec";
import Overhaul from "./components/Services/Overhaul";
import Suspension from "./components/Services/Suspension";
import Gearbox from "./components/Services/Gearboxes";
import CV from "./components/Services/CV";
import Shocks from "./components/Services/Shocks";
import React from "react";

function App() {
  return (
    <>
      <ContactInfo />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/brakes" element={<Brakes />} />
        <Route path="/services/clutches" element={<Clutches />} />
        <Route path="/services/cv-joints" element={<CV />} />
        <Route path="/services/engine" element={<Engine />} />
        <Route path="/services/overhaul" element={<Overhaul />} />
        <Route path="/services/electric-diagnostic" element={<Elec />} />
        <Route path="/services/suspension" element={<Suspension />} />
        <Route path="/services/gearbox" element={<Gearbox />} />
        <Route path="/services/shocks" element={<Shocks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
