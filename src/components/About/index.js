import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { useStyles } from './styled.about';

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="about">
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid
            item
            md={6}
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <Image
              src="/author.jpeg"
              alt="Author image"
              width={500}
              height={550}
              objectFit="cover"
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
            />
          </Grid>
          <Grid
            item
            md={6}
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <Typography variant="h4">About Me</Typography>
            <Box>
              <Typography variant="subtitle1">
                Hi, i&apos;m Justice Chimobi a multi-disciplinary Software
                Engineer with a curious mind during the day, TECHNICAL WRITER
                during the night who lives in Lagos, Nigeria. I love to build
                things that works on computer (both for the web and mobile),
                lover of open-source and the TECH community.
              </Typography>
              <Typography variant="subtitle1">
                I like to build exciting, interactive and responsive apps making
                it accessible for the Web and Mobile platforms by turning
                mockups into actual web application using words, pictures and
                sounds with the mindset of building for mobile first and offline
                user experience.
              </Typography>
              <Typography variant="subtitle1">
                If am not hacking out things on computer or learning new things
                you will find me playing console games with friends and family
                or listening to good music.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { About };
