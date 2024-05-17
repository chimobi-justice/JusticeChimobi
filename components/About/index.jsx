"use client"

import Image from "next/image"
import Box from '@mui/material/Box'
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import { useStyles } from "@/components/About/styled.about"
import { motion } from 'framer-motion'
import useAnimate from '@/hooks/useAnimate'

const About = () => {
  const classes = useStyles();

  const { ref, controls, variants, transition } = useAnimate();

  return (
    <Box component="section" className={classes.root} id="about" ref={ref}>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Typography variant="h4" gutterBottom
          component={motion.h4}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
        >
          <span style={{ color: '#00f900' }}>01.</span> About Me
        </Typography>

        <Grid container spacing={6}>
          <Grid item lg={8} md={7} sm={12} xs={12}
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={transition}
          >
            <Box>
              <Typography variant="subtitle1">
                Justice, a <span style={{ color: '#00f900' }}>multi-disciplinary</span> Software Engineer
                based in Lagos, Nigeria, is passionate about
                creating web and mobile applications. By day, he
                delves into various <span style={{ color: '#00f900' }}>technical challenges</span>, while
                at night, he transforms into a technical writer.
              </Typography>
              <Typography variant="subtitle1">
                Justice is deeply involved in the tech community and
                loves <span style={{ color: '#00f900' }}>open-source projects.</span> His expertise lies in
                building interactive and responsive apps, creating optimized {' '}
                <span style={{ color: '#00f900' }}>RESTFUL API's</span> and prioritizing
                accessibility for both web and mobile platforms.
              </Typography>
              <Typography variant="subtitle1">
                He embraces a <span style={{ color: '#00f900' }}>mobile-first</span> approach and focuses on
                optimizing offline user experiences. When he's not
                coding or learning, Justice enjoys playing console
                games and listening to music.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1">
                Here are a <span style={{ color: '#00f900' }}>few technologies</span>  {' '}
                I’ve been <span style={{ color: '#00f900' }}>working</span> with recently:</Typography>
              <Grid container spacing={4}>
                <Grid item md={4}>
                  <Typography variant="subtitle2">Reactjs</Typography>
                  <Typography variant="subtitle2">TypeScript</Typography>
                  <Typography variant="subtitle2">Nextjs</Typography>
                  <Typography variant="subtitle2">Ant Design</Typography>
                  <Typography variant="subtitle2">MUI</Typography>
                  <Typography variant="subtitle2">styled-component</Typography>
                </Grid>

                <Grid item md={4}>
                  <Typography variant="subtitle2">React Query</Typography>
                  <Typography variant="subtitle2">TailwindCss</Typography>
                  <Typography variant="subtitle2">Laravel</Typography>
                  <Typography variant="subtitle2">PHP</Typography>
                  <Typography variant="subtitle2">My SQL</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item lg={4} md={5} sm={12} xs={12}
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={transition}
          >
            <Box className={classes.aboutImage}>
              <Image
                src="/my-profile.png"
                width={280}
                height={240}
                alt="my photo"
                objectFit="cover"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About;