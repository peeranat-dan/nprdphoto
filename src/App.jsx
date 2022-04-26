import React from "react";
import EventSection from "./components/Calendar/EventSection";
import GallerySection from "./components/Gallery/GallerySection";


const App = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen max-h-fit p-4 lg:pt-28 lg:px-8 flex flex-col">
        <div className="text-2xl text-slate-500">
            @nprdphoto
        </div>
        <div className="flex flex-col md:flex-row">
            <EventSection />
            <GallerySection />
        </div>

    </div>
  );
};

export default App;
