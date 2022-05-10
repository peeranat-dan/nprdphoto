import React, {useState} from "react";
import {getMonth} from "../../utils/Date";
import Month from "../Calendar/Month";
import dayjs from "dayjs";
const Calendar = props => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <>

            <div className="mx-2 md:mx-5 lg:mx-36 h-fit md:h-screen flex flex-col">
                <span className="text-3xl font-semibold text-myGreen mb-5">{dayjs().format('MMMM') + " " + dayjs().format('YYYY')}</span>
                <Month month={currentMonth} />
            </div>
        </>
    );
};

export default Calendar;