import { createTheme } from '@mui/material/styles';

const customTheme = {
  palette: {
    primary: {
      main: '#00000',
      light: '#F6F8FA',
    },
    secondary: {
      main: '#5329CF',
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 100,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'initial',
        },
      },
    },
  },
};

const theme = createTheme(customTheme);

export default theme;
