import React from "react";
import Logo from "../assets/Fraction AI.png";
import { menuLinks } from "../common/menuLinks";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="bg-white p-4 py-6">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <img className="h-4 bg-contain" src={Logo} alt="Fraction AI" />
                    <div>
                        {menuLinks.map((menuLink) => (
                            <a 
                                href={menuLink.link} 
                                className="text-base font-normal text-center text-black px-4"
                            >
                                {menuLink.menu}
                            </a>
                        ))}
                    </div>
                    <Button
                        isPrimary={true}
                        text="Book demo"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;