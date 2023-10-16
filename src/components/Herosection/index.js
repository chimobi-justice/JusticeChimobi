import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

import { useStyles } from './styled.herosection';

import { NavigationLg } from '../Navigation/Desktop';
import { NavigationSm } from '../Navigation/Mobile';
import { Button } from '../Button';

const Herosection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="home">
      {isMatch ? <NavigationSm /> : <NavigationLg />}
      <Box className={classes.root}>
        <Box className={classes.wrapper}>
          <Typography variant="h1">👋 Hello, I&apos;m</Typography>
          <Typography variant="h2">Justice Chimobi</Typography>
          <Typography variant="h3">A Software Engineer</Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disableElevation={true}
            type="button"
            href="#contact"
          >
            Get in touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { Herosection };
