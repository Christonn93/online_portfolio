import { Box, Typography } from "@mui/material";
import React from "react";

const CallToAction: React.FC = () => {
 return (
  <Box sx={{ textAlign: "center", marginY: 4 }}>
   <Typography variant="h4">I'd love to hear from you!</Typography>
   <Typography variant="body1">Feel free to reach out with any questions or opportunities.</Typography>
  </Box>
 );
};

export default CallToAction;
