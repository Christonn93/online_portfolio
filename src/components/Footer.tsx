import { Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
 return (
  <Typography variant="body1" color="textSecondary">
   © {new Date().getFullYear()} Christopher Tønnesland. All rights reserved.
  </Typography>
 );
};

export default Footer;
