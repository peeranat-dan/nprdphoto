import React from "react";

const EventLabel = props => {
    let bgColor;
    if (props.event.title === "n/a") {
        bgColor = "myRed";
    } else {
        bgColor = "myGreen";
    }
    return (
        <>
            <div className={`hidden md:flex pl-2 p-1 text-sm mb-1 items-center`}>
                <div className={`w-2 h-2 bg-${bgColor} rounded-full mr-2`}></div>
                <div>{props.event.title}</div>
            </div>
            <div className={`flex flex-col md:hidden $bg-{bgColor} p-1 items-center text-white text-sm rounded mb-1`}>
                <div className={`bg-${bgColor} w-2 h-2 rounded-full text-xl`}></div>
            </div>
        </>
    );
};

export default EventLabel;