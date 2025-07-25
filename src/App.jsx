

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FeaturesPage from "./components/features/FeaturesPage.jsx";
import TherapistPage from "./components/therapists/TherapistPage.jsx";
import ClinicsPage from "./components/clinics/ClinicsPage.jsx";
import HowItWorks from "./components/howworks/HowItWorks.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/therapists" element={<TherapistPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
