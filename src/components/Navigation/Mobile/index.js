import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useStyles } from './styled.mobile';

import { NAVBAR } from '../../../constant/menu';

const NavigationSm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const classes = useStyles(isToggled);

  const handleOpenDrawer = () => {
    setIsToggled(true);
  };

  const handleCloseDrawer = () => {
    setIsToggled(false);
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2">Justice C.</Typography>
          </Grid>
          <Grid item>
            {isToggled ? (
              <IconButton onClick={handleCloseDrawer}>
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleOpenDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.drawer}>
        <Box>
          {NAVBAR.map((menu) => (
            <Fragment key={menu.name}>
              <Link href={menu.path} passHref={true}>
                <Typography variant="subtitle2">{menu.name}</Typography>
              </Link>
            </Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { NavigationSm };
