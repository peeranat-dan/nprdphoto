import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from "react-scroll";

const Footer = props => {
    const year = new Date().getFullYear();
    return (
        <footer className="py-6 px-5 sm:px-36 flex flex-col sm:flex-row justify-between">
            <div className="text-xs tracking-wide">
                COPYRIGHT @ {year} PEERANAT DANAIDUSADEEKUL
            </div>
            <div>
                <Link
                    className="hover:text-myGreen transition duration-200 cursor-pointer text-xs"
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >TO THE TOP <KeyboardArrowUpIcon /></Link>
            </div>
        </footer>
    );
};

export default Footer;