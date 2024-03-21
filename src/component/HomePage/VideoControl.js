import React from "react";
import { styled } from '@mui/material/styles';
import Button from "../../elements/Button";
import Slider from '@mui/material/Slider';

const VideoControl = ({ handlePause, startTime, endTime, totalDuration }) => {
    // slider label
    const valueText = (value) => {
        return `${value}s`;
    };

    // start time in percentage
    const startPercentage = Math.round((startTime / totalDuration) * 100);
    // end time in percentage
    const endPercentage = Math.round((endTime / totalDuration) * 100);

    // label
    const marks = [
        {
          value: startPercentage,
          label: `${startTime}s`,
        },
        {
            value: endPercentage,
            label: `${endTime}s`,
        },
    ];

    // customizing slider
    const TimeSlider = styled(Slider)({
        color: "#0a0604",
        height: 20,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 0,
        '& .MuiSlider-thumb': {
            height: 15,
            width: 4,
            padding: '10px 0',
            marginBottom: 0,
            backgroundColor: '#000',
            border: '1px solid currentColor',
            '&:hover': {
              boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            }
        },
        '& .MuiSlider-markLabel': {
            fontSize: 10,
            fontWeight: 'normal',
            bottom: 0,
            backgroundColor: 'unset',
            padding: '5px',
            color: '#000',
            '&::before': {
              display: 'none',
            },
            '& *': {
              background: 'transparent',
              color: '#000',
            },
          },
    });

    return (
        <div className="flex justify-start items-center w-full pt-0">
            <Button
                text="Start"
                isCustom={true}
                isRounded={false}
                isSmall={true}
                onClick={() => handlePause("start")}
            />
            <TimeSlider
                getAriaLabel={() => 'Time range'}
                value={[startPercentage, endPercentage]}
                marks={marks}
                valueLabelDisplay="auto"
                getAriaValueText={valueText}
                track="inverted"
                // color="black"
                disabled
            />
            <Button
                text="End"
                isCustom={true}
                isRounded={false}
                isSmall={true}
                onClick={() => handlePause("end")}
            />
        </div>
    );
};

export default VideoControl; 