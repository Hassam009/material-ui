import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <div>
      {/* AppBar with title and IconButton */}
      <AppBar position="static">
        <Toolbar>
          {/* Menu Icon Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Demo
          </Typography>
          {/* Learn More Button */}
          <Button color="inherit" href="https://mui.com" target="_blank" rel="noopener noreferrer">
            Learn More
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main content container */}
      <Container>
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Material-UI
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is a simple demonstration of Material-UI components in a React app.
          </Typography>

          {/* MUI Buttons */}
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Primary Button
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary Button
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
