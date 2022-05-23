import React, {useEffect, useState} from 'react';
import Modal from "../UI/Modal";
import price from "../../../apis/price.json";
import SchoolIcon from '@mui/icons-material/School';
import FaceIcon from '@mui/icons-material/Face';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const PriceModal = props => {
    const title = "Pricing";
    const [people, setPeople] = useState(1);
    const [time, setTime] = useState("");
    const [amount, setAmount] = useState(0);
    // const handleChange = e => {
    //     // console.log(e.target.value)
    //     setTime(+e.target.value);
    // };
    // const peopleHandler = (e) => {
    //     if (+e.target.value < 0) {
    //         return ;
    //     }
    //     setPeople(+e.target.value);
    // };
    const calAmount = () => {
        if (!time || !people) {
            setAmount(0);
        } else {
            const newPrice = price[mode];
            setAmount(newPrice[time] + price['additional'] * (people - 1));
        }
    };
    const [mode, setMode] = useState('');
    useEffect(() => {
        calAmount();
    }, [people, time, mode]);


    const [gradBg,setGradBg] = useState("text-myGreen");
    const [profileBg,setProfileBg] = useState("text-myGreen");
    const [fullBg,setFullBg] = useState("text-myGreen");
    const [halfBg,setHalfBg] = useState("text-myGreen");
    const modeHandler = (e) => {
        setMode(e.target.innerText);
        if (e.target.innerText === "Graduation") {
            setGradBg("text-white bg-myGreen");
            setProfileBg("text-myGreen bg-none");
        } else if (e.target.innerText === "Profile") {
            setProfileBg("text-white bg-myGreen");
            setGradBg("text-myGreen bg-none");
        }
    };
    const timeHandler = e => {
        if (e.target.innerText === "Full day") {
            setTime("fullDay");
            setFullBg("text-white bg-myGreen");
            setHalfBg("text-myGreen bg-none");
        } else if (e.target.innerText === "Half day") {
            setTime("halfDay")
            setHalfBg("text-white bg-myGreen");
            setFullBg("text-myGreen bg-none");
        }
    };
    const peopleHandler = e => {
        if (e.target.innerText === "-") {
            if (people > 1) {
                setPeople(people => people - 1);
            }
        } else {
            setPeople(people => people + 1);
        }
    };
    return (
        <Modal title={title} onAction={props.onToggle}>
            <div className="flex flex-col py-2 px-2">

                {/*<div className="flex justify-between my-2">*/}

                {/*    <div className="flex items-center my-2">*/}
                {/*        <input onChange={handleChange} className="mx-1 accent-myRed" type="radio" id="halfday" name="time" value={price.halfDay} />*/}
                {/*        <label className="mx-1" htmlFor="halfday">Half day</label>*/}
                {/*        <input onChange={handleChange} className="mx-1 accent-myRed" type="radio" id="fullday" name="time" value={price.fullDay} />*/}
                {/*        <label className="mx-1" htmlFor="fullday">Full day</label>*/}
                {/*    </div>*/}

                {/*    <input className="bg-gray-200 p-2 rounded-lg shadow-md w-1/3 ml-1 mr-3" type="number" min={1} placeholder="People" onChange={peopleHandler} />*/}
                {/*</div>*/}
                <div className="flex my-2 space-x-2 justify-center">
                    <button onClick={modeHandler} className={`w-fit border-2 border-myGreen p-2 rounded-full ${gradBg}`}>
                        <SchoolIcon />
                        <span className="ml-2">
                            Graduation
                        </span>
                    </button>
                    <button onClick={modeHandler} className={`w-fit border-2 border-myGreen p-2 rounded-full ${profileBg}`}>
                        <FaceIcon />
                        <span className="ml-2">
                            Profile
                        </span>
                    </button>
                </div>
                <div className="flex space-x-2 my-2 justify-center">
                    <button
                        disabled={mode.length === 0}
                        onClick={timeHandler}
                        className={`w-fit border-2 border-myGreen p-2 rounded-full  disabled:border-gray-300 disabled:text-gray-300 ${halfBg}`}>
                        <LightModeOutlinedIcon />
                        <span className="ml-2">
                            Half day
                        </span>
                    </button>
                    <button
                        disabled={mode.length === 0 || mode === "Profile"}
                        onClick={timeHandler}
                        className={`w-fit border-2 border-myGreen p-2 rounded-full disabled:border-gray-300 disabled:text-gray-300 ${fullBg}`}>
                        <LightModeIcon />
                        <span className="ml-2">
                            Full day
                        </span>
                    </button>
                </div>
                <div className="flex my-2 justify-center items-center">
                    <button
                        onClick={peopleHandler}
                        disabled={!mode || time.length === 0 || people === 1}
                        className="mr-5 rounded-full bg-myRed w-6 h-6 flex items-center justify-center text-white text-xl disabled:bg-gray-300"
                    >-</button>
                    <span className="text-lg">{people}</span>
                    <button
                        disabled={mode.length === 0 || time.length === 0}
                        onClick={peopleHandler}
                        className="ml-5 rounded-full bg-myRed w-6 h-6 flex items-center justify-center text-white text-xl disabled:bg-gray-300"
                    >+</button>
                </div>
                <div className="flex justify-end items-center mt-2">
                    Total Price: <span className="text-2xl ml-5 mr-2">{amount}</span>
                </div>
            </div>
        </Modal>
    );
};

export default PriceModal;