import { createTheme } from "@mui/material/styles";

// Light theme setup
export const lightTheme = createTheme({
 palette: {
  mode: "light",
  primary: {
   main: "#00695f", // Teal for primary buttons and elements
  },
  secondary: {
   main: "#ff9800", // Orange for secondary accents
  },
  background: {
   default: "#f5f5f5", // Light grey for the background
   paper: "#ffffff", // White for cards and surfaces
  },
  text: {
   primary: "#333333", // Dark text for contrast
   secondary: "#666666",
  },
 },
 typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#00695f', // Set color to primary color
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#00695f', // Set color to primary color
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#00695f', // Set color to primary color
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#00695f', // Set color to primary color
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

// Dark theme setup
export const darkTheme = createTheme({
 palette: {
  mode: "dark",
  primary: {
   main: "#90caf9", // Light blue for primary elements
  },
  secondary: {
   main: "#ff4081", // Pinkish for modern accents
  },
  background: {
   default: "#121212", // Dark grey background
   paper: "#1e1e1e", // Slightly lighter for cards
  },
  text: {
   primary: "#e0e0e0", // Lighter text for readability
   secondary: "#b0b0b0",
  },
 },
 typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#90caf9', // Set color to primary color
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#90caf9', // Set color to primary color
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#90caf9', // Set color to primary color
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#90caf9', // Set color to primary color
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});
