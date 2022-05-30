import React, {useEffect, useState} from "react";
import {getMonth} from "../../utils/Date";
import Month from "../Calendar/Month";
import dayjs from "dayjs";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Calendar = props => {
    let thisMonth = dayjs().month();
    const [n, setN] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const [title, setTitle] = useState(dayjs().format('MMM') + " " + dayjs().format('YYYY'));
    useEffect(() => {
        setCurrentMonth(getMonth(thisMonth + n));
        setTitle(dayjs().month(thisMonth + n).format('MMM') + " " + dayjs().month(thisMonth + n).format('YYYY'));
    }, [n]);
    const addN = () => {
        setN(n => n + 1);
    };
    const minusN = () => {
        setN(n => n - 1);
    };
    return (
        <>

            <div className="mx-2 md:mx-5 lg:mx-36 h-fit md:h-screen flex flex-col">
                <div className="flex justify-start lg:justify-center space-x-5 items-center mb-5">
                    <div className="flex items-center content-center">
                        <button
                            onClick={minusN}
                            className="hidden md:flex mr-5 p-2 rounded-full bg-myRed w-fit items-center justify-center text-white text-xl disabled:bg-gray-300"
                        ><ArrowBackIosNewIcon /></button>
                        <span className="text-3xl font-semibold text-myGreen">{title}</span>
                        <button
                            onClick={addN}
                            className="hidden md:flex ml-5 p-2 rounded-full bg-myRed w-fit items-center justify-center text-white text-xl disabled:bg-gray-300"
                        ><ArrowForwardIosIcon /></button>
                    </div>

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