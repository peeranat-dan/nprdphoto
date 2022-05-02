import React, {useState} from "react";
import Card from "../UI/Card";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PriceModal from "./PriceModal";

import price from '../../../apis/price.json';


const InfoSection = () => {
    const [showPrice, setShowPrice] = useState(false);
    const togglePriceModal = () => {
        setShowPrice(showPrice => !showPrice)
    };
    return (
        <div className="w-full p-2">
            {showPrice && <PriceModal onToggle={togglePriceModal}/>}
            <div className="text-3xl font-semibold py-3">
                Information
            </div>
            <div className="flex flex-wrap">
                <Card color="bg-indigo-500">
                    <div className="text-xl font-semibold mb-2 flex justify-between items-center">
                        Price Rate
                        <button onClick={togglePriceModal} className="flex items-center rounded-md px-1 py-1">
                            <CalculateOutlinedIcon className="text-white" />
                        </button>
                    </div>
                    <div className="">
                        - Half-day: {price.halfDay} THB<br />
                        - Full day: {price.fullDay} THB<br />
                        - Additional: {price.additional} THB/person<br />
                        
                    </div>
                </Card>
                <Card color="bg-rose-500">
                    <div className="text-xl font-semibold mb-6">
                        Contact
                    </div>
                    <div className="flex space-x-6">
                        <a href="mailto:peeranatdan.photo@gmaill.com">
                            <MailOutlineIcon />
                        </a>
                        <a href="https://www.instagram.com/nprdphoto/">
                            <InstagramIcon />
                        </a>
                        <a href="tel:0837772230">
                            <LocalPhoneOutlinedIcon />
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default InfoSection;