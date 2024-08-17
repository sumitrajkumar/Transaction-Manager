import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { grey, green, blue, blueGrey } from "@mui/material/colors";
import { mockDataTeam as mockTransactions } from "../../data/Data"; // Corrected import
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ color: "white" }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: "white" }}>
            DASHBOARD
          </Typography>
          <Typography variant="h6" sx={{ color: "rgb(29, 121, 102)", marginBottom:'10px' }}>
            Welcome to your dashboard
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: 'rgb(50, 52, 110)',
              color: grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="rgb(28, 36, 57)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: "rgb(29, 121, 102)", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="rgb(28, 36, 57)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon sx={{ color: "rgb(29, 121, 102)", fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="rgb(28, 36, 57)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: "rgb(29, 121, 102)", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="rgb(28, 36, 57)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: "rgb(29, 121, 102)", fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="rgb(28, 36, 57)"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="100" color="grey[100]">
                Revenue Generated
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="grey[500]">
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "36px", color: grey[800] }}
                />
              </IconButton>
            </Box>
          </Box>
          {/* <Box height="10px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box> */}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="rgb(28, 36, 57)"
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{color:"white"}}>
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography variant="h6"  sx={{ mt: "15px",color:"rgb(29, 121, 102)" }}>
              $48,352 revenue generated
            </Typography>
            <Typography sx={{color:"white"}} >Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor="Grey[400]">
          {/* <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography> */}
          {/* <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
