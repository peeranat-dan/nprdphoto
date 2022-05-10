import React, {useEffect} from "react";
import EventSection from "./components/Event/EventSection";
import GallerySection from "./components/Gallery/GallerySection";
import InfoSection from "./components/Details/InfoSection";
import NavBar from "./components/UI/NavBar";
import ContactSection from "./components/Contact/ContactSection";
import AboutSection from "./components/About/AboutSection";
import Footer from "./components/UI/Footer";


const App = () => {
  return (
    <div className="bg-stone-100 w-full min-h-screen max-h-fit flex flex-col" id="top">
        <NavBar />
        <div className="text-center my-6 md:my-12 lg:my-24 select-none">
            <span className="text-xl sm:text-3xl md:text-5xl font-semibold">PEERANAT DANAIDUSADEEKUL</span>
            <div className="w-12 h-1 bg-myGreen mx-auto my-2.5" />
            A normal photographer with glasses
        </div>
        <div id="gallery">
            <GallerySection />
        </div>
        <div id="about">
            <AboutSection />
        </div>
        <div id="event">
            <EventSection />
        </div>

        <div id="contact">
            <ContactSection />
        </div>
        <Footer />

    </div>
  );
};

export default App;
