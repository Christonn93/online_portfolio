import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

// Define the valid Typography variant values
type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline";

interface ComponentProps {
 heading: string;
 size: TypographyVariant; // Use the union type here
 icon: ReactNode;
 children: ReactNode;
}

const SectionComponent: React.FC<ComponentProps> = ({ heading, icon, children, size }) => {
 return (
  <Box component="div">
   <Typography variant={size || "body1"} sx={{ display: "flex", gap: 1, alignItems: "center" }}>
    {icon} {heading}
   </Typography>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 2,
     padding: 2,
     borderTop: "2px solid",
     borderColor: "primary.main",
     marginTop: 2,
    }}
   >
    {children}
   </Box>
  </Box>
 );
};

export default SectionComponent;
