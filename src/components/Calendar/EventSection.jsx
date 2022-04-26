import React, {useState} from "react";
import EventCard from "./EventCard";
import date from "../../../apis/date.json";


const EventSection = () => {
    const [eventLists, setEventLists] = useState(date);
    return (
        <div className="w-full lg:w-1/2 p-2">
            <div className="text-3xl font-semibold py-3">
                Upcoming tasks
            </div>
            <div className="flex flex-wrap w-full place-content-center md:place-content-start">
                {eventLists.map(d => <EventCard key={d.date + d.month} config={d} />)}
            </div>
        </div>
    );
};

export default EventSection;