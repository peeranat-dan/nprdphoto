import React, {useState} from "react";
import {getMonth} from "../../utils/Date";
import Month from "../Calendar/Month";
import dayjs from "dayjs";
const Calendar = props => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <>

            <div className="mx-2 md:mx-5 lg:mx-36 h-fit md:h-screen flex flex-col">
                <div className="flex justify-start space-x-5 items-center mb-5">
                    <span className="text-3xl font-semibold text-myGreen">{dayjs().format('MMMM') + " " + dayjs().format('YYYY')}</span>
                    <div className="flex items-center md:hidden">
                        <div className={`bg-myGreen w-2 h-2 rounded-full text-xl mr-2 `}></div>Work
                    </div>
                    <div className="flex items-center md:hidden">
                        <div className={`bg-myRed w-2 h-2 rounded-full text-xl mr-2 `}></div>Not Available
                    </div>
                </div>
                <Month month={currentMonth} />
            </div>
        </>
    );
};

export default Calendar;