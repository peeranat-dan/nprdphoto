import React from "react";
import {Link} from "react-scroll";

const Drawer = props => {
    const toggleDialog = () => {
        props.onToggle();
    };
    return (
        <div
            className={`top-0 w-[45vw] flex flex-col justify-start bg-slate-50 text-white z-40 fixed h-full transition duration-500 ${props.showSidebar} ? 'left-0' : '-left-[45vw]'`}>
            <button onClick={toggleDialog}>
                <div className="text-myGreenHover p-8">X</div>
            </button>
            <ul className="flex flex-col tracking-widest space-y-5 items-center">
                {props.section.map(li => {
                    return <li key={li.text}>
                        <Link
                            className="text-black hover:text-myGreen transition duration-200 cursor-pointer"
                            activeClass="active"
                            to={li.href}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={toggleDialog}
                        >{li.text}</Link>
                    </li>;
                })}
            </ul>
        </div>
    );
};

export default Drawer;