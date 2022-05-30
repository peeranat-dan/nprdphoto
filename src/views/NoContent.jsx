import React from "react";

import {Link} from "react-router-dom";

const NoContent = () => {
    return (
        <div className="bg-stone-100 w-full min-h-screen flex flex-col items-center justify-center">
            <div className="text-3xl md:text-6xl font-bold mb-2">404 <span className="text-myRed">Not Found</span></div>
            <div className="text-xl">Back to <Link className="text-myGreen hover:text-myGreenHover font-semibold transition duration-200" to="/nprdphoto">Home</Link></div>
        </div>
    );
};

export default NoContent;