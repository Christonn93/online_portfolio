import "./style/App.css";
import { Box, Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";

import { LetterIcon } from "./icons/icons";

import SectionComponent from "./components/SectionComponent";
import Header from "./components/Header";
import { useState } from "react";
import { lightTheme, darkTheme } from "./style/theme";

import PostSection from "./components/PostSection";
import ToolBoxSection from "./components/ToolBoxSection";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
 const [isDarkMode, setIsDarkMode] = useState(true);

 // Toggle theme between light and dark modes
 const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
 };

 return (
  <>
   <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <CssBaseline />
    <Container>
     <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 5,
      }}
     >
      <Header toggler={toggleTheme} mode="isDarkMode" />

      <Box
       flex={1}
       component={"main"}
       sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
       }}
      >
       <IntroSection />
       <AboutSection />
       <ToolBoxSection />
       <PostSection />
       <ContactSection />
      </Box>

      <Footer />
     </Box>
    </Container>
   </ThemeProvider>
  </>
 );
}

export default App;
