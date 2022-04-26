import React, {useState} from "react";
import EventCard from "../Calendar/EventCard";
import PhotoCard from "./PhotoCard";


const GallerySection = () => {
    const [data, setData] = useState([
        {date: 1, month: 'May', title: 'งานนอกรอบ', color: 'indigo'},
        {date: 7, month: 'May', title: 'Pre-graduation', color: 'indigo'},
        {date: 12, month: 'May', title: '⛔ N/A', color: 'pink'},
        {date: 17, month: 'May', title: '⛔ N/A', color: 'pink'},
        {date: 20, month: 'May', title: 'งานรับปริญญา', color: 'indigo'},

    ]);
    return (
        <div className="w-full md:w-3/5 p-2">
            <div className="text-3xl font-semibold py-3">
                Portfolio
            </div>
            <div className="flex flex-wrap">
                {data.map(d => <PhotoCard />)}

            </div>
        </div>
    );
};

export default GallerySection;