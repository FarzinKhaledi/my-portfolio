import { createTheme } from '@mui/material/styles';

// Create a minimal MUI theme that works with Tailwind CSS
// This theme has minimal default styles so Tailwind classes take precedence
export const theme = createTheme({
  components: {
    // Disable default styles for common components to allow Tailwind to control styling
    MuiButton: {
      styleOverrides: {
        root: {
          // Remove default padding/margin that might interfere
          textTransform: 'none', // Keep text as-is
          boxShadow: 'none', // Remove default shadow
          '&:hover': {
            boxShadow: 'none', // Remove hover shadow
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // Allow Tailwind to control TextField styling
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // Remove default MUI input styles to allow Tailwind classes
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // Remove default shadow, let Tailwind handle it
          boxShadow: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        // Ensure MUI doesn't override Tailwind's base styles
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
  },
  // Minimal theme values - Tailwind will handle most styling
  palette: {
    mode: 'light',
  },
});

