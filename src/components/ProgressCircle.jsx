import { Box } from '@mui/material';
import React from 'react';

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
    const angle = progress * 360;

    return (
        <Box
            sx={{
                background: `conic-gradient(
                    rgb(29, 121, 102) 0deg ${angle}deg,
                    rgb(56, 59, 139) ${angle}deg 360deg
                )`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    borderRadius: "50%",
                    width: "80%",
                    height: "80%",
                    backgroundColor: "rgb(28, 36, 57)",
                }}
            />
        </Box>
    );
};

export default ProgressCircle;
