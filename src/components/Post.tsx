import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GitHub, Language } from "@mui/icons-material";
import { Project } from "../types/ProjectTypes";

type ProjectCardProps = {
 project: Project;
 index: number;
};

// Styled Box component with border top and bottom
const StyledBox = styled(Box)(({ theme }) => ({
 borderTop: `2px solid ${theme.palette.divider}`,
 borderBottom: `2px solid ${theme.palette.divider}`,
 padding: theme.spacing(2),
 marginBottom: theme.spacing(2),
 borderRadius: theme.shape.borderRadius,
}));

const Post: React.FC<ProjectCardProps> = ({ project, index }) => {
 const { metadata } = project;

 return (
  <StyledBox>
   <Typography variant="h6" component="h2" gutterBottom key={index}>
    {metadata.project_title}
   </Typography>
   <Typography variant="body1" color="textSecondary" dangerouslySetInnerHTML={{ __html: metadata.project_description }} />
   <Box display="flex" justifyContent="flex-end" gap={2}>
    <Button size="small" color="primary" variant="outlined" href={metadata.live_demo_link} startIcon={<Language />}>
     Live Demo
    </Button>
    <Button size="small" color="primary" variant="contained" href={metadata.github_link} startIcon={<GitHub />}>
     View Code
    </Button>
   </Box>
  </StyledBox>
 );
};

export default Post;
