import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Teal (Greenish Blue)
    },
    secondary: {
      main: '#0288d1', // Blue
    },
    background: {
      default: '#e0f7fa', // Light Blue background
    },
    text: {
      primary: '#004d40', // Dark Greenish Blue
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,
  },
  spacing: 8, // Default spacing unit
});

export default theme;
