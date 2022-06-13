import React, {useEffect, useState} from "react";
import EventSection from "./components/Event/EventSection";
import GallerySection from "./components/Gallery/GallerySection";
import NavBar from "./components/UI/NavBar";
import ContactSection from "./components/Contact/ContactSection";
import AboutSection from "./components/About/AboutSection";
import Footer from "./components/UI/Footer";
import { Link } from "react-scroll";
import './App.css';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=> {
    setTimeout(() => {
        setIsLoading(false)
    },1000);
  });
  return (
      <div>
        { isLoading ?
            <div className="h-screen w-screen flex justify-center items-center">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            :
            <div className="bg-stone-100 w-full min-h-screen max-h-fit flex flex-col" id="top">
              <NavBar />
              <div className="text-center my-6 md:my-12 lg:my-24 select-none">
                <span className="text-xl sm:text-3xl md:text-5xl font-semibold">PEERANAT DANAIDUSADEEKUL</span>
                <div className="w-12 h-1 bg-myGreen mx-auto my-2.5" />
                See my schedule
                <Link
                    className="ml-1 text-myGreen hover:text-myGreenHover hover:underline transition-all duration-200 cursor-pointer"
                    activeClass="active"
                    to="event"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >here</Link>
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
        }

      </div>
  );
};

export default App;
