import React from "react";
import PhotoCard from "./PhotoCard";

import photos from "../../../apis/photos.json";
import casualPhotos from "../../../apis/casualPhoto.json";
import ImageCarousel from "./ImageCarousel";

const GallerySection = () => {
    return (
        <div className="w-full mx-auto px-2 pt-2 sm:mb-36">
            <div className="">
                <div className="hidden lg:block mx-auto md:mx-10">
                    <ImageCarousel photos={photos} />
                </div>
                <div className="hidden lg:block mx-auto md:mx-10 mt-4">
                    <ImageCarousel photos={casualPhotos} />
                </div>
                <div className="flex flex-col lg:hidden mx-auto md:mx-10 mt-3">
                    {[...photos, ...casualPhotos].map(photo => {
                        return <PhotoCard key={photo.id} config={photo} />
                    })}
                </div>
            </div>

        </div>
    );
};

export default GallerySection;