import React from "react";

const Card = props => {
    const color = props.color ? props.color : "";

    return (
        <div className={`py-4 px-8 ${color} w-full sm:w-fit text-white rounded-lg mx-2 mb-2 flex flex-col`} >
            { props.children }
        </div>
    )
};

export default Card;