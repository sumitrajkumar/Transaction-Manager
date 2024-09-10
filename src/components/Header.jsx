import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  
  return (
    <Box mb="30px"  display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h2"
        color="white"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="rgb(29, 121, 102)">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;