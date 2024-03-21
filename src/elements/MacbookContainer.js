import React from "react";
import Macbook from "../assets/Macbook.png"
import "./style.css";

const MacbookContainer = ({ children }) => {
    return (
        <div className="w-full z-40 relative">
            <img src={Macbook} alt="mackbook" />
            <div className="flex justify-start items-top absolute custom-container">
                {children}
            </div>
        </div>
    );
};

export default MacbookContainer;