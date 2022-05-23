import React from "react";

const Modal = (props) => {
    return (
        <div id="modal" className="fixed visible z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
            <div className="relative top-40 mx-auto shadow-lg rounded-lg bg-white max-w-md">
                <div className="flex justify-between items-center bg-myGreen text-white text-2xl rounded-t-md px-4 py-2">
                    {props.title}
                    <button onClick={props.onAction}>x</button>
                </div>
                { props.children }
            </div>
        </div>
    );
};

export default Modal;