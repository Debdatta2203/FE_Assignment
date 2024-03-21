import React from "react";
import Modal from "@mui/material/Modal";
import Button from "./Button";

const CustomModal = ({ 
    open, onClose, primaryBtnText, onClickPrimary, secondaryText, onClickSecondary, children
}) => {
    return (
        <Modal
            open={open}
            onClose={() => onClose(false)}
        >
            <div className="custom-modal bg-white w-3/5 h-1/2 p-6 px-10">
                {children}
                <div className="mt-2 absolute bottom-8 flex justify-end w-10/12">
                    <Button
                        isPrimary={true}
                        text={primaryBtnText}
                        onClick={onClickPrimary}
                    />
                    <span className="pl-3"></span>
                    <Button
                        isSecondary={true}
                        text={secondaryText}
                        onClick={onClickSecondary}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default CustomModal;