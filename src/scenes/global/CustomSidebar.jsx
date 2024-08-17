import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { grey,red,black } from "@mui/material/colors";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: grey[500],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const CustomSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box  sx={{ height: '100vh' , position: 'relative',backgroundColor:"rgb(28, 36, 57)"}}>
      <Sidebar collapsed={isCollapsed} style={{border:'2px solid rgb(28, 36, 57)'}} >
        <Menu iconShape="square"  >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon style={{ color: "white" }} /> :<MenuOutlinedIcon /> }
            style={{
              color: "white",
              backgroundColor:"rgb(28, 36, 57)",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color="white">
                  ADMINS
                </Typography>
                {/* <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton> */}
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box pb="25px" backgroundColor="rgb(28, 36, 57)">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="user"
                  width="100px"
                  height="100px"
                  src= "/logo192.ppg"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color="white" 
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  sumit
                </Typography>
                <Typography variant="h5" color="green">
                  Root Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "0%"} backgroundColor="rgb(28, 36, 57)" >
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Typography
              variant="h7"
              color="white"
              sx={{ m: "15px 0 5px 20px", fontSize:"20px" }}
            >
              Data
            </Typography>
            <Link to="./team" style={{ textDecoration: 'none' }} >
            <Item
              title="Transactions"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
          
            <Typography
              variant="h7"
              color="white"
              sx={{ m: "15px 0 5px 20px", fontSize:"20px"  }}
            >
              Pages
            </Typography>
          <Link to="./form" style={{ textDecoration: 'none' }}>
            <Item
              title="Transaction Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Typography
              variant="h7"
              color="white"
              sx={{ m: "15px 0 5px 20px", fontSize:"20px"  }}
            >
              Charts
            </Typography>
            <Link to="./bar" style={{ textDecoration: 'none' }}>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Link to="./pie" style={{ textDecoration: 'none' }}>
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              </Link>
              <Link to="./line" style={{ textDecoration: 'none' }}>
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default CustomSidebar;
