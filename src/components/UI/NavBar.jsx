import React, {useState} from "react";
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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

    const home = () => {
        window.location.reload();
    };
    return (
        <>
            <nav className="sticky top-0 z-50 flex lg:justify-between md:px-32 py-6 md:py-8 select-none bg-stone-100">
                <button onClick={toggleSideBar} className="md:hidden mx-3">
                    { showSideBar ? <CloseIcon />: <MenuIcon /> }
                </button>
                <span className="text-3xl font-semibold text-myGreenHover hover:cursor-pointer" onClick={home}>NPRDPHOTO</span>
                <ul className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-stone-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in border-opacity-60 border-b-2 md:border-0 border-myGreen ${showSideBar ? 'top-20 ':'top-[-490px]'}`}>
                    {
                        section.map((link)=>(
                        <li key={link.text} className='md:ml-8 text-xl md:my-0 my-5'>
                            <Link
                                className="hover:text-myGreen transition-all duration-200 cursor-pointer"
                                activeClass="active"
                                to={link.href}
                                spy={true}
                                onClick={toggleSideBar}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >{link.text}</Link>
                        </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};

export default NavBar;