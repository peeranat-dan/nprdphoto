import React from "react";
import {Link} from "react-scroll";

const AboutSection = () => {
    const startYear = 2016;
    const thisYear = new Date().getFullYear();
    const imgId = "1N969hNrGJ_krHuQoNYZOomJEODMGYVl9";
    return (
        <div className="flex flex-col-reverse lg:flex-row px-5 lg:px-[15rem] py-12 lg:py-24">
            <div>
                <img className="rounded-lg mt-8 lg:mt-0 mx-auto w-full sm:w-[400px]" src={`https://drive.google.com/uc?export=view&id=${imgId}`}/>
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
                    className="bg-myGreen hover:bg-myGreenHover p-2 rounded-lg text-white transition duration-200 cursor-pointer text-lg uppercase"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Contact me</Link>
            </div>
        </div>
    )
};

export default AboutSection;