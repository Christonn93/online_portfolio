import { Box, Link, Typography } from "@mui/material";
import { Component } from "react";
import { GithubIcon, LinkedinIcon, EmailIcon } from "../icons/icons";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";

type Props = {
 toggler: () => void;
 mode: boolean;
};

class Header extends Component<Props> {
 state = {};

 render() {
  const { toggler, mode } = this.props;
  const isDarkMode = mode === false;

  return (
   <Box
    component="header"
    sx={{
     display: "flex",
     justifyContent: "space-between",
     flex: 1,
     padding: 3,
    }}
   >
    <Typography variant="h3">Portfolio</Typography>
    <Box
     component="nav"
     sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
     }}
    >
     <Link href="#" underline="hover">
      <GithubIcon />
     </Link>
     <Link href="#" underline="hover">
      <LinkedinIcon />
     </Link>
     <Link href="#" underline="hover">
      <EmailIcon />
     </Link>

     {/* Toggle button for dark/light mode */}
     <Box onClick={toggler} sx={{ cursor: "pointer" }}>
      {isDarkMode ?  <Brightness3Icon /> : <LightModeIcon />}
     </Box>
    </Box>
   </Box>
  );
 }
}

export default Header;
