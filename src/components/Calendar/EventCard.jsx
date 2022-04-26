import React from "react";

const EventCard = props => {
    const config = props.config
    ;
    // const colorArray = ['indigo', 'green', 'pink']
    // const random = Math.floor(Math.random() * (colorArray.length));
    const colors = {
        'indigo': 'bg-indigo-500 text-indigo-50',
        'pink': 'bg-rose-500 text-rose-50',
        'green': 'bg-teal-500 text-teal-50',

    };
    return (
        <div  className="w-1/6 md:w-2/5 m-2 bg-white rounded-lg shadow-xl flex items-center overflow-hidden">
            <div className={`${colors[config.color]} w-full md:w-fit uppercase text-center rounded-lg sm:rounded-l-lg sm:rounded-r-none p-4`}>
                <div className="text-sm">{config.month}</div>
                <div className="text-2xl font-bold">{config.date}</div>
            </div>
            <div className="p-4 hidden md:block">
                {config.title}
            </div>
        </div>
    );
};

export default EventCard;