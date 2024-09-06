import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

// Define the interface for props
interface ProfileImageProps {
 src: string;
 alt: string;
}

// Styled Avatar with hover and floating effect
const StyledAvatar = styled(Avatar)(({ theme }) => ({
 width: 200,
 height: 200,
 borderRadius: "50%",
 boxShadow: `0px 4px 8px ${theme.palette.grey[500]}`,
 transition: "transform 0.3s ease, box-shadow 0.3s ease",
}));

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
 return <StyledAvatar src={src} alt={alt} />;
};

export default ProfileImage;
