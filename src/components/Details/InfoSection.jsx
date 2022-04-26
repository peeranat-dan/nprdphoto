import React from "react";
import Card from "../UI/Card";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

const InfoSection = () => {
    return (
        <div className="w-full p-2">
            <div className="text-3xl font-semibold py-3">
                Information
            </div>
            <div className="flex flex-wrap">
                <Card color="bg-indigo-500">
                    <div className="text-xl font-semibold mb-2">
                        Price Rate
                    </div>
                    <div className="">
                        - Half-day: 3,500 THB<br />
                        - Full day: 4,500 THB<br />
                        - Additional: 500 THB/person<br />
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
                            <PhoneIcon />
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default InfoSection;