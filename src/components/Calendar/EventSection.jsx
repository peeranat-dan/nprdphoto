import React, {useEffect, useState} from "react";
import EventCard from "./EventCard";
import date from "../../../apis/date.json";


const EventSection = () => {
    const [eventLists, setEventLists] = useState(date);
    const [months, setMonths] = useState([]);
    const availableMonth = () => {
        const months = [];
        date.forEach(d => {
            if (!months.includes(d.month)) {
                months.push(d.month);
            }
        });
        return months;
    };
    useEffect(() => {
        setMonths(availableMonth())
    },[]);
    const selectHandler = (e) => {
        let targetMonth = e.target.value;
        let filteredEvents;
        if (targetMonth === "All") {
            filteredEvents = date;
        } else {
            filteredEvents = date.filter(d => {
                return d.month === e.target.value
            })
        }
        setEventLists(filteredEvents)
    };


    return (
        <div className="w-full p-2">
            <div className="text-3xl font-semibold py-3 flex">
                Upcoming tasks
                <select onChange={selectHandler} defaultValue="All" className="rounded-lg p-1 text-[0.5em] ml-20">
                    <option key={""} value="All">All</option>
                    {months.map(month => <option key={month} value={month}>{month}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap w-full place-content-center md:place-content-start">
                {eventLists.map(d => <EventCard key={d.date + d.month} config={d} />)}
            </div>
        </div>
    );
};

export default EventSection;