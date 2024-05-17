"use client"

import { createTheme } from "@mui/material/styles"

const customTheme = {
  pallete: {
    primary: {
      main: '#00000',
      light: '#F6F8FA',
    },
    secondary: {
      main: '#5329CF',
      dark: '#0a1931'
    },
    typography: {
      h1: {
        fontSize: '5rem',
        fontWeight: 100,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'initial',
            },
          },
        },
      }
    }
  },
  typography: {
    subtitle1: {
      fontFamily: 'Comfortaa',
      marginBottom: '1em',
      lineHeight: '1.8em',
      wordSpacing: '.1em',
      fontSize: '1.1rem',
      fontWeight: 300,
      color: 'lightgray'
    },
    subtitle2: {
      fontFamily: 'Comfortaa',
      marginBottom: '1em',
      lineHeight: '1.6em',
      wordSpacing: '.1em',
      fontSize: '.9rem',
      fontWeight: 200,
      color: 'lightgray'
    }
  },
}

const theme = createTheme(customTheme);

export default theme;

