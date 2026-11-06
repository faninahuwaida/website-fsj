import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

// HOME
import Home from "./pages/Home";

// EVENT PAGES
import Charity from "./events/Charity/Charity";
import CareerSummit from "./events/CareerSummit/CareerSummit";
import StepUp from "./events/StepUp/StepUp";
import StepTalk from "./events/StepTalk/StepTalk";
import Bootcamp from "./events/Bootcamp/Bootcamp";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <div className="site-shell">
        {/* GLOBAL COMPONENTS */}
        <Header />

        <main className="main-content-wrapper">
          <Routes>
            {/* =====================
                HOME
            ====================== */}
            <Route path="/" element={<Home />} />

            {/* ABOUT US */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* =====================
                EVENT PAGES
            ====================== */}
            <Route path="/events" element={<Outlet />}>
              <Route path="charity" element={<Charity />} />

              <Route path="career-summit" element={<CareerSummit />} />

              <Route path="step-up" element={<StepUp />} />

              <Route path="step-talk" element={<StepTalk />} />

              <Route path="bootcamp" element={<Bootcamp />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
