import React from "react";
import SectionComponent from "./SectionComponent";
import { Box, Link, Typography } from "@mui/material";
import ResumeButton from "./ResumeButton";
import { EmailIcon, GithubIcon, LinkedinIcon, PencilIcon } from "../icons/icons";

const AboutSection: React.FC = () => {
 return (
  <SectionComponent size="h2" heading="About" icon={<PencilIcon />}>
   <Box>
    <Typography variant="body1">
     I am an energetic and skilled front-end developer with a passion for development. I work to create websites that are elegant, tidy, and have smooth functionality.
    </Typography>
    <Typography variant="body1">With me, you get a person who loves to learn new things, is curious, and works hard.</Typography>
   </Box>
   <Box>
    <Box
     component="nav"
     sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
     }}
    >
     <ResumeButton />
     <Link href="#" underline="hover">
      <GithubIcon />
     </Link>
     <Link href="#" underline="hover">
      <LinkedinIcon />
     </Link>
     <Link href="#" underline="hover">
      <EmailIcon />
     </Link>
    </Box>
   </Box>
  </SectionComponent>
 );
};

export default AboutSection;
