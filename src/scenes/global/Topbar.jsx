import React from "react";
import { Box, colors, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
// import {colorModeContext, tokens} from "../../theme"
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsModeOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Topbar() {
  return (
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor="rgb(20, 26, 40)">
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor="rgb(28, 36, 57)" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1,color:'rgb(250, 250, 250)' }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1, color:'white' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" >
        <IconButton sx={{ color: 'white' }}>
          <LightModeOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <NotificationsModeOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
