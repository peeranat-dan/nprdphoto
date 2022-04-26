import React from "react";
import photos from "../../../apis/photos.json";

const ImageCarousel = () => {
    return (
        <div id="default-carousel" className="relative" data-carousel="static">
            <div className="overflow-hidden relative h-[400px] rounded-lg sm:h-[800px] xl:h-80 2xl:h-96">
                {photos.map(e => {
                    return <div className="duration-700 ease-in-out" key={e.id} data-carousel-item>
                    <span
                        className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <img src={`https://drive.google.com/uc?export=view&id=${e.id}`}
                             className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                             alt="..."/>
                    </div>
                })}
            </div>

            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                {photos.map(e => {
                    return <button key={'b' + e.id} type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1"
                            data-carousel-slide-to={photos.indexOf(e)}></button>
                })}

            </div>

            <button type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev>
        <span
            className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                              strokeLinejoin="round" strokeWidth="2"
                                                                              d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
            </button>
            <button type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next>
        <span
            className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                              strokeLinejoin="round" strokeWidth="2"
                                                                              d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
            </button>
        </div>
    );
};

export default ImageCarousel;
