import React from "react";
import {Link} from "react-scroll";
import { useState } from "react";
import PriceModal from "../Details/PriceModal";

const AboutSection = () => {
    const startYear = 2016;
    const thisYear = new Date().getFullYear();
    const src = "https://firebasestorage.googleapis.com/v0/b/photography-profile.appspot.com/o/myPhoto%2FDSC04005(1).jpg?alt=media&token=02590c87-be3c-4eae-9352-bc4dca168353";
    const imgId = "1N969hNrGJ_krHuQoNYZOomJEODMGYVl9";
    const [showPrice, setShowPrice] = useState(false);
    const togglePriceModal = () => {
        setShowPrice(showPrice => !showPrice)
    };
    return (
        <div className="flex flex-col-reverse lg:flex-row px-5 lg:px-[15rem] py-12 lg:py-24">
            {showPrice && <PriceModal onToggle={togglePriceModal}/>}
            <div>
                <img className="rounded-lg mt-8 lg:mt-0 mx-auto w-full sm:w-[400px]" src={src}/>
            </div>
            <div className="px-3 lg:px-8">
                <div className="text-3xl font-semibold text-myGreen mb-6 hidden lg:block">Hello there, I'm Nin.</div>
                <div className="text-3xl font-semibold text-myGreen mb-6 lg:hidden">About Nin</div>
                <div className="text-lg indent-8 text-justify">
                    Nin is a part-time photographer based in Thailand. He was filled with passion for photography since {startYear}. He usually brings his camera with him everywhere he goes.
                </div>
                <div className="text-lg indent-8 text-justify mt-3 mb-7">
                    With {thisYear - startYear} years-experience, Nin is ready to grab any opportunities you give him and he will return you the best of his photography skill.
                </div>
                <Link
                    className="bg-myGreen hover:bg-myGreenHover p-2 rounded-lg mx-1 text-white transition duration-200 cursor-pointer text-lg uppercase"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Contact me</Link>
                <button
                    className="bg-myGreen hover:bg-myGreenHover p-2 rounded-lg mx-1 text-white transition duration-200 cursor-pointer text-lg uppercase"
                    onClick={togglePriceModal}
                >Pricing</button>
            </div>
        </div>
    )
};

export default AboutSection;