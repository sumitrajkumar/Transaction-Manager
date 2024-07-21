import {Box,UseTheme} from '@mui/material'

import React from 'react'

const ProgressCircle = ({ progress = "0.75",size='40'}) =>{
    const angle = progress *360;

    return(
        <Box 
        sx={{
            background:`radial-gradient("primary[500]" 55% tranparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, blue[500] ${angle}deg 360deg),
            green[500]`,
            borderRadius:"50%",
            width:`${size}px`,
            height:`${size}px`,
        }}
        />
    )
}

export default ProgressCircle
