import React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useStyles } from './styled.desktop';

import { NAVBAR } from '../../../constant/menu';

const NavigationLg = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            Justice C.
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={3}>
              {NAVBAR.map((menu) => (
                <Grid item key={menu.name}>
                  <Link href={menu.path}>
                    <Typography variant="subtitle2">{menu.name}</Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export { NavigationLg };
