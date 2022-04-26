import React, {useEffect} from "react";
import EventSection from "./components/Calendar/EventSection";
import GallerySection from "./components/Gallery/GallerySection";
import InfoSection from "./components/Details/InfoSection";


const App = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen max-h-fit pt-16 pb-4 px-4 lg:pt-28 lg:px-8 flex flex-col">
        <div className="text-2xl text-slate-500 hover:text-slate-600 transition-colors duration-200">
            <a href="https://www.instagram.com/nprdphoto/">@nprdphoto</a>
        </div>
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <EventSection />
                <InfoSection />
            </div>
            <GallerySection />
        </div>

    </div>
  );
};

export default App;
