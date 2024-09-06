import React from "react";
import { Box, Typography, Link, List, ListItem, Card, CardContent, CardMedia, Avatar } from "@mui/material";

interface BlogCardProps {
 author: string;
 date: string;
 tags: string[];
 image: string;
 title: string;
 subtitle: string;
 description: string;
 readMoreLink: string;
 reverse?: boolean; // For alternate layout
}

const BlogCard: React.FC<BlogCardProps> = ({ author, date, tags, image, title, subtitle, description, readMoreLink, reverse }) => {
 return (
  <Card sx={{ display: "flex", flexDirection: reverse ? "row-reverse" : "row", margin: "1rem", boxShadow: 3 }}>
   <CardMedia
    component="div"
    sx={{
     width: 250,
     height: 200,
     backgroundImage: `url(${image})`,
     backgroundSize: "cover",
     transition: "transform 0.2s",
     "&:hover": { transform: "scale(1.2) rotate(3deg)" },
    }}
   />
   <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
    <CardContent sx={{ flexGrow: 1, padding: "1rem", position: "relative" }}>
     <Typography variant="h5">{title}</Typography>
     <Typography variant="subtitle1" sx={{ color: "gray" }}>
      {subtitle}
     </Typography>
     <Typography variant="body2" sx={{ marginTop: "1rem" }}>
      {description}
     </Typography>
    </CardContent>
    <Box sx={{ padding: "0 1rem 1rem", textAlign: "right" }}>
     <Link href={readMoreLink} underline="hover" color="primary">
      Read More
     </Link>
    </Box>
   </Box>
   <Box
    sx={{
     position: "absolute",
     top: 0,
     left: reverse ? "auto" : 0,
     right: reverse ? 0 : "auto",
     width: "250px",
     height: "100%",
     background: "rgba(0, 0, 0, 0.6)",
     color: "#fff",
     padding: "10px",
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     transition: "all 0.3s ease",
     "&:hover": { left: reverse ? "0" : "100%", right: reverse ? "100%" : "0" },
    }}
   >
    <Typography variant="body1" component="div">
     <Avatar sx={{ marginRight: "10px" }} />
     {author}
    </Typography>
    <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
     {date}
    </Typography>
    <List sx={{ display: "flex", flexWrap: "wrap" }}>
     {tags.map((tag) => (
      <ListItem key={tag} sx={{ padding: "0 5px" }}>
       <Link href="#" color="inherit">
        {tag}
       </Link>
      </ListItem>
     ))}
    </List>
   </Box>
  </Card>
 );
};

export default BlogCard;
