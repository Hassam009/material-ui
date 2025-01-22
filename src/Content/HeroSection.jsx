import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme/theme'; // Make sure the path is correct to where your theme is defined

const HeroSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{ textAlign: "center", marginTop: 8 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Material-UI
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is a simple demonstration of Material-UI components in a React
            app.
          </Typography>
          <Typography variant="caption" color="textSecondary" gutterBottom>
            Caption text for small details.
          </Typography>
          <br />
          {/* MUI Buttons with theme colors */}
          <Button
            variant="contained"
            color="primary" // This will use your theme's primary color
            sx={{ marginRight: 2 }}
          >
            Primary Button
          </Button>
          <Button
            variant="outlined"
            color="secondary" // This will use your theme's secondary color
          >
            Secondary Button
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HeroSection;
