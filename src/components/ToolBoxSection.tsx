import React from "react";
import SectionComponent from "./SectionComponent";
import DevIcon from "../icons/devIcons/DevIcon";
import { devIcons } from "../icons/devIcons/devIcons";
import { Box, Typography } from "@mui/material";
import { ToolboxIcon } from "../icons/icons";

const ToolBoxSection: React.FC = () => {
 return (
  <SectionComponent size="h2" heading="ToolBox" icon={<ToolboxIcon />}>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 4,
    }}
   >
    <Box>
     <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
      Languages
     </Typography>
     <Box
      sx={{
       display: "flex",
       flexWrap: "wrap",
       gap: 2,
       justifyContent: "center",
       alignItems: "center",
      }}
     >
      {devIcons.languages.map((icon) => (
       <Box
        key={icon.name}
        sx={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         flexBasis: "100px",
         flexShrink: 0,
        }}
       >
        <DevIcon name={icon.name} iconName={icon.iconName} />
       </Box>
      ))}
     </Box>
    </Box>
    <Box>
     <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
      Frameworks
     </Typography>
     <Box
      sx={{
       display: "flex",
       flexWrap: "wrap",
       gap: 2,
       justifyContent: "center",
       alignItems: "center",
      }}
     >
      {devIcons.frameworks.map((icon) => (
       <Box
        key={icon.name}
        sx={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         flexBasis: "100px",
         flexShrink: 0,
        }}
       >
        <DevIcon name={icon.name} iconName={icon.iconName} />
       </Box>
      ))}
     </Box>
    </Box>
    <Box>
     <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
      Tools
     </Typography>
     <Box
      sx={{
       display: "flex",
       flexWrap: "wrap",
       gap: 2,
       justifyContent: "center",
       alignItems: "center",
      }}
     >
      {devIcons.tools.map((icon) => (
       <Box
        key={icon.name}
        sx={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         flexBasis: "100px",
         flexShrink: 0,
        }}
       >
        <DevIcon name={icon.name} iconName={icon.iconName} />
       </Box>
      ))}
     </Box>
    </Box>
   </Box>
  </SectionComponent>
 );
};

export default ToolBoxSection;
