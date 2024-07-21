import { Box, UseTheme, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { grey,black } from "@mui/material/colors";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{ color: grey[100] }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress="progress" />
        </Box>

        <Box display="flex" justifyContent="center">
          <Typography variant="h5" sx={{ color: grey[100] }}>
            {subtitle}
          </Typography>

          <Typography
            variant="h4"
            fontWeight="italic"
            sx={{ color: grey[600] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default StatBox;
