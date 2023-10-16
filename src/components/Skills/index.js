import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { LOGO } from '../../constant/skillLogo';

import { useStyles } from './styled.skill';

const Skills = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="skills">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            md={6}
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <Typography variant="h4">Skills</Typography>
            <Box>
              <Typography variant="subtitle1">
                As a Software Engineer I have a diverse set of skills ranging
                from the <strong>FRONTEND STACK</strong> as key strength [
                HTML(5), CSS(3), BootStrap, Sass, Tailwindcss, styled-component,
                Ant Design, JavaScript [ Es6, TypeScript, ReactJs, React-query,
                Alpinejs], <strong>BACKEND STACK</strong> [PHP, PostgreSQL,
                MySQL, laravel, livewire], Git.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {LOGO.map((logo) => (
              <Image src={logo} width={100} height={35} alt="Logo" key={logo} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { Skills };
