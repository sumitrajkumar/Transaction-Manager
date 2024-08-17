import { Box, UseTheme, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { grey,black } from "@mui/material/colors";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <Box width="100%" m="0 30px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Box >
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="bold" sx={{ color: grey[100] }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: grey[100] }}>
          {subtitle}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
      <ProgressCircle progress={progress} />
      <Typography
          variant="h7"
          fontWeight="italic"
          sx={{ color: "rgb(29, 121, 102)",marginTop:"4px" }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  </Box>
  );
};
export default StatBox;
