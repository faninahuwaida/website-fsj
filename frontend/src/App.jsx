import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

// HOME
import Home from "./pages/Home";

// ABOUT US
import AboutUs from "./pages/AboutUs/AboutUs";

// COMMUNITY & CONTACT
import Community from "./Community";
import Contact from "./Contact";

// EVENT PAGES
import Charity from "./events/Charity/Charity";
import CareerSummit from "./events/CareerSummit/CareerSummit";
import StepUp from "./events/StepUp/StepUp";
import StepTalk from "./events/StepTalk/StepTalk";
import Bootcamp from "./events/Bootcamp/Bootcamp";

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

            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* ABOUT US */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* COMMUNITY */}
            <Route path="/community" element={<Community />} />

            {/* CONTACT */}
            <Route path="/contact" element={<Contact />} />

            {/* EVENT PAGES */}
            <Route path="/events" element={<Outlet />}>
              <Route path="charity" element={<Charity />} />
              <Route path="career-summit" element={<CareerSummit />} />
              <Route path="step-up" element={<StepUp />} />
              <Route path="step-talk" element={<StepTalk />} />
              <Route path="bootcamp" element={<Bootcamp />} />
            </Route>

          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
