import React from "react";
import Day from "./Day";
import dates from "../../../apis/date.json";

const Month = ({month}) => {
    const events = dates;
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5 md:bg-white md:rounded-lg md:p-5 select-none">
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i} events={events} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Month;