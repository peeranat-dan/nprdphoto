import React from "react";

const PhotoCard = props => {
    const config = props.config;
    const src = "https://drive.google.com/uc?export=view&id=" + config.id;
    return (
        <div className="overflow-hidden mt-2 mx-auto md:m-2 shadow-xl rounded-lg w-[300px] md:w-[200px] md:h-[250px]">
            <img src={src} className="rounded-lg object-cover h-full w-full text-center"  alt={config.model}/>
        </div>
    );
};

export default PhotoCard;