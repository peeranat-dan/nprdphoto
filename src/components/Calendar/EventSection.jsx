import React, {useState} from "react";
import EventCard from "./EventCard";


const EventSection = () => {
    const [data, setData] = useState([
        {date: 1, month: 'May', title: '📷 Freelance', color: 'indigo'},
        {date: 7, month: 'May', title: '📷 Pre-graduation', color: 'indigo'},
        {date: 12, month: 'May', title: '⛔ N/A', color: 'pink'},
        {date: 17, month: 'May', title: '⛔ N/A', color: 'pink'},
        {date: 20, month: 'May', title: '📷 Graduation', color: 'indigo'},
    ]);
    return (
        <div className="w-full md:w-1/2 p-2">
            <div className="text-3xl font-semibold py-3">
                Upcoming tasks
            </div>
            <div className="flex flex-wrap">
                {data.map(d => <EventCard key={Math.random().toString()} config={d} />)}
            </div>
        </div>
    );
};

export default EventSection;