import React from "react";

const Button = ({
    isPrimary,
    isSecondary,
    isCustom,
    isRounded,
    isSmall,
    text,
    onClick
}) => {
    return (
        <button
            className={`
                ${isPrimary ? "bg-purple" : isSecondary ? "bg-gray-300" : "bg-black"} 
                text-white 
                ${isRounded ? "rounded-3xl" : ""}
                ${isSmall ? "px-1 text-2xs" : "p-2 px-4 text-normal"}
            `}
            onClick={onClick}
            
        >
            {text}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    isPrimary: false,
    isSecondary: false,
    isCustom: false,
    isRounded: true,
    isSmall: false,
    onClick: () => {}
};