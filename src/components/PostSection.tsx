import React from "react";
import SectionComponent from "./SectionComponent";
import { useProjects } from "../api/useProjects";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Post from "./Post";
import { Project } from "../types/ProjectTypes";

const PostSection: React.FC = () => {
 const { data: projects = [], isLoading, error } = useProjects();

 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>;

 return (
  <SectionComponent size="h2" heading="Projects" icon={<DataObjectIcon fontSize="large" />}>
   {projects.map((project: Project, index: number) => (
    <Post key={project.slug} project={project} index={index} />
   ))}
  </SectionComponent>
 );
};

export default PostSection;
