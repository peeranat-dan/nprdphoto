import React, {useState} from "react";
import PhotoCard from "./PhotoCard";

import photos from "../../../apis/photos.json";
import ImageCarousel from "./ImageCarousel";


const GallerySection = () => {
    const [photoLists, setPhotoLists] = useState(photos);
    return (
        <div className="w-full lg:w-3/5 p-2">
            <div className="text-3xl font-semibold py-3">
                Portfolio
            </div>
            <div className="hidden md:flex flex-wrap">
                {photoLists.map(d => <PhotoCard key={d.id} config={d} />)}
            </div>
            <div className="md:hidden">
                <ImageCarousel />
            </div>
        </div>
    );
};

export default GallerySection;