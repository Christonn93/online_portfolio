import { Box, Typography } from "@mui/material";
import React from "react";

const Location: React.FC = () => {
 return (
  <Box>
   <Typography variant="h6">My Location</Typography>
   <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.874214552458!2d-122.4017574846798!3d37.79063497975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a935d83db%3A0x487edc9a4d7d2ff0!2sYour%20Location!5e0!3m2!1sen!2sus!4v1636646810494!5m2!1sen!2sus"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Location"
   ></iframe>
  </Box>
 );
};

export default Location;
