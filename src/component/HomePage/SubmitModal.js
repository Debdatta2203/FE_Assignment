import React from "react";
import Logo from "../../assets/Fraction AI.png";
import CustomModal from "../../elements/CustomModal";

const SubmitModal = ({ open, setOpen, startTime, endTime, videoDesc, setShowToast }) => {
    const handleSubmit = () => {
        setShowToast("Data saved successfully.");
        setOpen(false);
    };

    return (
        <CustomModal 
            open={open} 
            onClose={() => setOpen(false)}
            primaryBtnText="Submit"
            onClickPrimary={handleSubmit}
            secondaryText="Cancel"
            onClickSecondary={() => setOpen(false)}
        >
            <div>
                <div className="flex justify-between items-center">
                    <img className="h-3" src={Logo} alt="Fraction AI" />
                    <h3 className="text-lg font-bold">Video Details</h3>
                    <button onClick={() => setOpen(false)}>x</button>
                </div>
                <p className="font-normal text-sm pt-4">
                    <span className="font-semibold">Start Time</span>
                    &nbsp;:&nbsp;
                    {startTime}s
                </p>
                <p className="font-normal text-sm pt-2">
                    <span className="font-semibold">End Time</span>
                    &nbsp;:&nbsp;
                    {endTime}s
                </p>
                <p className="font-normal text-sm pt-2">
                    <span className="font-semibold">Description</span>
                    &nbsp;:&nbsp;
                    {videoDesc}
                </p>
            </div>
        </CustomModal>
    );
};

export default SubmitModal;