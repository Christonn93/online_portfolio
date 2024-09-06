import React from "react";
import { Tooltip, Typography, Box } from "@mui/material";
import Icon from "@mui/material/Icon";

interface DevIconProps {
 iconName: string;
 name: string;
}

const DevIcon: React.FC<DevIconProps> = ({ iconName, name }) => {
 return (
  <Tooltip title={name} arrow>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     cursor: "pointer",
     padding: 1,
    }}
   >
    <Icon className={iconName} sx={{ fontSize: 40 }} color="success"/>
    <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
     {name}
    </Typography>
   </Box>
  </Tooltip>
 );
};

export default DevIcon;
