import React from "react";

const PhotoCard = props => {
    const config = props.config;
    const src = "https://drive.google.com/uc?export=view&id=" + config.id;
    return (
        <div className="overflow-hidden mt-3 mx-auto md:my-3 shadow-xl rounded-lg w-[300px] md:w-[250px] md:h-[350px]">
            <img src={src} className="rounded-lg object-cover h-full w-full text-center"  alt={config.model}/>
        </div>
    );
};

export default PhotoCard;