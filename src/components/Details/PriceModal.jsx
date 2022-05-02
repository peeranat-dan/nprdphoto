import React, {useEffect, useState} from 'react';
import Modal from "../UI/Modal";
import price from "../../../apis/price.json";

const PriceModal = props => {
    const title = "Price Calculator";
    const [people, setPeople] = useState();
    const [time, setTime] = useState();
    const [amount, setAmount] = useState(0);
    const handleChange = e => {
        // console.log(e.target.value)
        setTime(+e.target.value);

    };
    const peopleHandler = (e) => {
        if (+e.target.value < 0) {
            return ;
        }
        setPeople(+e.target.value);
    };
    const calAmount = () => {
        if (!time || !people) {
            setAmount(0);
        } else {
            setAmount(time + (people-1) * price.additional);
        }
    };
    useEffect(() => {
        calAmount();
    }, [people, time]);
    return (
        <Modal title={title} onAction={props.onToggle}>
            <div className="flex flex-col py-2 px-2 divide-y-2">
                <div className="flex justify-between my-2">
                    <div className="flex items-center my-2">
                        <input onChange={handleChange} className="mx-1" type="radio" id="halfday" name="time" value={price.halfDay} />
                        <label className="mx-1" htmlFor="halfday">Half day</label>
                        <input onChange={handleChange} className="mx-1" type="radio" id="fullday" name="time" value={price.fullDay} />
                        <label className="mx-1" htmlFor="fullday">Full day</label>
                    </div>

                    <input className="bg-gray-200 p-2 rounded-lg shadow-md w-1/3 ml-1 mr-3" type="number" min={1} placeholder="People" onChange={peopleHandler} />
                </div>
                <div className="flex justify-end items-center mt-2">
                    Total Price: <span className="text-2xl ml-5 mr-2">{amount}</span>
                </div>
            </div>
        </Modal>
    );
};

export default PriceModal;