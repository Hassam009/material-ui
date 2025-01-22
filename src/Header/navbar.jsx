import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, Tabs, Tab, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      {/* AppBar with Toolbar */}
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Material UI App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Drawer (Side Navigation Menu) */}
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button>
            <Typography>Home</Typography>
          </ListItem>
          <ListItem button>
            <Typography>About</Typography>
          </ListItem>
          <ListItem button>
            <Typography>Contact</Typography>
          </ListItem>
        </List>
      </Drawer>

      {/* Tabs for organizing content */}
      <Box sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="navigation tabs">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <Box sx={{ padding: 3 }}>
          {tabValue === 0 && <Typography variant="h6">Content for Tab 1</Typography>}
          {tabValue === 1 && <Typography variant="h6">Content for Tab 2</Typography>}
          {tabValue === 2 && <Typography variant="h6">Content for Tab 3</Typography>}
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
