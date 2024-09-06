import { Box, Link } from "@mui/material";
import React from "react";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../icons/icons";

const ContactInfo: React.FC = () => {
 return (
  <Box
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
  </Box>
 );
};

export default ContactInfo;
