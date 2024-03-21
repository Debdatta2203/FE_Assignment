import React, { useState } from "react";
import Button from "../../elements/Button";
import MacbookContainer from "../../elements/MacbookContainer";
import VideoCard from "./VideoCard";
import SubmitModal from "./SubmitModal";
import "./style.css";

const HomePage = ({ setShowToast }) => {
    // states
    const [enteredURL, setEnteredURL] = useState("");
    const [videoDesc, setVideoDesc] = useState("");
    // start time 
    const [startTime, setStartTime] = useState(0);
    // end time
    const [endTime, setEndTime] = useState(0);
    // modal states
    const [openModal, setOpenModal] = useState(false);
    // input error
    const [error, setError] = useState(false);

    return (
        <div className="py-4 lg:px-10 px-6">
            <h1 
                className="text-white text-center lg:text-7xl md:text-5xl text-3xl font-bold lg:px-36 px-10"
            >
                Supercharge AI using Human Powered Data
            </h1>
            <p className="text-center text-white text-normal lg:text-2xl lg:px-36 px-10 pt-6">
                High quality training data curated by a diverse and skilled crowd, tailored for your machine learning projects
            </p>
            <div className="flex justify-center items-center pt-6">
                <Button
                    isPrimary={true}
                    text="Contact Sales"
                />
            </div>
            <div className="flex">
                <MacbookContainer>
                    <input
                        type="text" name="videoURL" id="videoURL" placeholder="Enter the video URL"
                        onChange={(e) => setEnteredURL(e?.target?.value)}
                        className="border border-inherit rounded bg-white lg:h-8 md:h-6 h-4 w-3/5 text-inherit absolute input-position-top px-4 text-slate-800 text-2xs"
                    />
                    <div className="text-slate-600 text-sm video-card pl-2">
                        <VideoCard
                            videoURL={enteredURL}
                            // videoURL="https://www.youtube.com/watch?v=Q-y8ASwOYgQ" 
                            startTime={startTime}
                            setStartTime={(value) => setStartTime(value)}
                            endTime={endTime}
                            setEndTime={(value) => setEndTime(value)}
                        />
                        <textarea 
                            name="videoDescription" id="videoDescription" 
                            maxLength={500}
                            value={videoDesc}
                            onChange={(e) => setVideoDesc(e?.target?.value)}
                            spellCheck
                            placeholder="Describe the part of the video between the starting and ending point" 
                            className={`border ${error ? "border-red-500" : "border-inherit"} rounded bg-white w-full px-4 text-inherit text-slate-800 text-2xs mt-2`}
                        />
                        <div className="flex justify-center items-center">
                            <Button
                                isCustom={true}
                                isRounded={false}
                                isSmall={true}
                                text="Submit"
                                onClick={() => {
                                    if(videoDesc === "") {
                                        setError(true);
                                    } else {
                                        setOpenModal(true);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </MacbookContainer>
            </div>
            <SubmitModal
                open={openModal}
                setOpen={(value) => setOpenModal(value)}
                startTime={startTime}
                endTime={endTime}
                videoDesc={videoDesc}
                setShowToast={setShowToast}
                setError={(value) => setError(value)}
            />
        </div>
    );
};

export default HomePage;