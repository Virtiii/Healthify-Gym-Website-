import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "./App.css";
import Header from "./components/UI/Header/Header";
import Exercises from "./components/UI/Exercises";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Pricing from "./components/UI/Pricing";
import Start from "./components/UI/Start";
import Testimonials from "./components/UI/Testimonials";
import ContactUs from "./components/UI/ContactUs";
import BackToTop from "./components/UI/BackToTop";
import LocomotiveScroll from 'locomotive-scroll';
import Classes from "./components/UI/Classes";
import Diet from "./components/UI/Diet";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Error from "./components/UI/Error";
import BMICalculator from './components/BMICalculator/BMICalculator';
import Reasons from './components/Reasons/Reasons';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    Aos.init();
  }, []);

  const [isDarkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  
  return (
    <>
      <Router>
          <Routes>
          <Route path="/" element={<div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
            <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            <Hero />
            <Exercises />
            <Start />
            <Reasons/>
            <Pricing />
            <Testimonials />
          <br/>
          <ToastContainer position="top-center"/>
            <BMICalculator/>
            <ContactUs />
            <Footer />
            <BackToTop />
          </div>} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
