import React from "react";
import Navbar from "../elements/Navbar";

const Layout = ({ children }) => {
    return (
        <div className="bg-layout w-screen h-screen text-white">
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;