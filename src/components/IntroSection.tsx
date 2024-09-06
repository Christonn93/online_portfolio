import React from "react";
import SectionComponent from "./SectionComponent";
import { Box, Typography } from "@mui/material";
import Image from "../assets/profileimage.jpg";

import ProfileImage from "./Avatar";

const IntroSection: React.FC = () => {
 return (
  <SectionComponent size="h3" heading="" icon={<></>}>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
    }}
   >
    <Box>
     <Typography variant="h1">Front end developer</Typography>
     <Typography variant="body2"> with expertise in React, JavaScript, and Material-UI. Passionate about building beautiful and user-friendly web applications.</Typography>
    </Box>
    <ProfileImage src={Image} alt="Selfie" />
   </Box>
  </SectionComponent>
 );
};

export default IntroSection;
