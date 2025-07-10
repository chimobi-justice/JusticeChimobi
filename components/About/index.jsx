"use client"

import Link from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion'
import useAnimate from '@/hooks/useAnimate'
import {
  RootContainer,
  Wrapper,
} from '@/components/About/styled.about'
import { PROFILE_LINK } from '@/constant/profile-link'

const About = () => {
  const { ref, controls, variants, transition } = useAnimate();

  return (
    <RootContainer id="about" ref={ref}>
      <Wrapper>
        <Grid
          container
          spacing={3}
          alignItems={"center"}
        >
          <Grid item lg={7} sm={12} xs={12}
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={transition}
            whileInView={{ opacity: 1 }}
          >
            <Stack
              spacing={{ xs: 2, sm: 3 }}
              direction="row"
              alignItems="center"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              <Avatar
                alt="Justice Chimobi"
                src="/about-img.jpg"
                sx={{
                  width: { xs: 60, sm: 80, md: 100 },
                  height: { xs: 60, sm: 80, md: 100 },
                }}
              />

              <Typography variant="h1">I design and</Typography>
            </Stack>
            <Typography variant="h1" style={{ color: 'var(--primary-base-color)' }}>build things for the web.</Typography>
          </Grid>

          <Grid
            item
            lg={5}
            sm={12}
            xs={12}
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={transition}
            whileInView={{ opacity: 1 }}
          >
            <Box>
              <Typography variant="h4">
                An engineer with a strong design background, specializing in building
                digital systems, accessibility and interface design for digital products
              </Typography>

              <Box mt={"15px"}>
                <Grid container spacing={2} alignItems={"center"}>
                  {PROFILE_LINK.map((link, index) => (
                    <Grid
                      item
                      lg={6}
                      sm={6}
                      xs={6}
                      component={motion.div}
                      variants={variants}
                      initial="hidden"
                      animate={controls}
                      transition={transition}
                      whileInView={{ opacity: 1 }}
                    >
                      <Box component="span" pr={1} key={index}>
                        <Link href={link.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <IconButton>
                            {link.icon}
                          </IconButton>
                          <Box
                            component="span"
                            sx={{ textDecoration: "underline" }}
                          >
                            {link.name}
                          </Box>
                        </Link>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Wrapper>
    </RootContainer>
  )
}

export default About;