import React, {useState} from "react";
import { Link } from "react-scroll";
import Drawer from "./Drawer";
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
    const section = [
        {
            href: "top",
            text: "HOME"
        },
        {
            href: "about",
            text: "ABOUT"
        },
        {
            href: "event",
            text: "CALENDAR"
        },
        {
            href: "contact",
            text: "CONTACT"
        },

    ];

    const [showSideBar, setShowSideBar] = useState(false);

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
    };
    return (
        <>
            <nav className="sticky top-0 z-50 flex lg:justify-between lg:px-32 py-6 md:py-8 select-none bg-slate-50">
                {showSideBar && <Drawer showSideBar={showSideBar}  onToggle={toggleSideBar} section={section}/>}
                <button onClick={toggleSideBar} className="lg:hidden mx-3">
                    <MenuIcon className="focus:rotate-90" />
                </button>
                <span className="text-3xl font-semibold text-myGreenHover">NPRDPHOTO</span>
                <ul className="hidden lg:flex space-x-8 tracking-widest">
                    {section.map(li => {
                        return <li key={li.text}>
                            <Link
                                className="hover:text-myGreen transition duration-200 cursor-pointer"
                                activeClass="active"
                                to={li.href}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >{li.text}</Link>
                        </li>;
                    })}
                </ul>
            </nav>
            {/*<div className="md:hidden">*/}
            {/*    <AppBar position="static">*/}
            {/*        <Toolbar className="flex">*/}
            {/*            <button>*/}
            {/*                <MenuIcon />*/}
            {/*            </button>*/}
            {/*            <span className="text-2xl md:text-3xl font-semibold mx-5">NPRDPHOTO</span>*/}
            {/*        </Toolbar>*/}
            {/*    </AppBar>*/}
            {/*</div>*/}
        </>
    );
};

export default NavBar;