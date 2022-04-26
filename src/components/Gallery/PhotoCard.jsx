import React from "react";

const PhotoCard = props => {
    return (
        <div className="mt-2 mx-auto md:m-2 shadow-xl rounded-lg">
            <img src="https://picsum.photos/200/250" className="rounded-lg"  alt="random-img"/>
        </div>
    );
};

export default PhotoCard;