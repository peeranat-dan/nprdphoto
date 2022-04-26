import React, {useState} from "react";
import PhotoCard from "./PhotoCard";

import photos from "../../../apis/photos.json";


const GallerySection = () => {
    const [photoLists, setPhotoLists] = useState(photos);
    return (
        <div className="w-full lg:w-3/5 p-2">
            <div className="text-3xl font-semibold py-3">
                Portfolio
            </div>
            <div className="flex flex-wrap">
                {photoLists.map(d => <PhotoCard key={d.id} config={d} />)}
            </div>
        </div>
    );
};

export default GallerySection;