import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { useStyles } from './styled.footer';

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear().toString();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-around">
          <Grid item sm={12} md={6}>
            <Typography variant="subtitle2">
              &copy; {currentYear} - Developed by Justice Chimobi
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <span className="icon">
              <a
                href="https://github.com/chimobi-justice"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://res.cloudinary.com/djmo1tdsx/image/upload/v1588424320/bxl-github.svg" />
              </a>
            </span>
            <span className="icon">
              <a
                href="https://twitter.com/chimobijustice_"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://res.cloudinary.com/djmo1tdsx/image/upload/v1588424320/bxl-twitter.svg" />
              </a>
            </span>
            <span className="icon">
              <a
                href="https://www.linkedin.com/in/justice-chimobi"
                target="_blank"
                rel="noreferrer"
              >
                <img src="https://res.cloudinary.com/djmo1tdsx/image/upload/v1588424321/linkedin.svg" />
              </a>
            </span>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { Footer };
