"use client"

import Link from "next/link"
import Box from '@mui/material/Box'
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import { useStyles } from '@/components/HeroSection/styled.herosection'
import { Button } from "@/components/shared/Button"
import { motion } from 'framer-motion'
import useAnimate from "@/hooks/useAnimate"

const HeroSection = () => {
  const classes = useStyles();

  const { ref, controls, variants, transition } = useAnimate();

  return (
    <Box component="section" className={classes.root} id="home" ref={ref}>
      <Box className={classes.wrapper}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item>
              <Box component={motion.div} 
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={transition}
              >
                <Typography variant="h6" 
                  style={{ color: '#00f900' }}
                >
                  👋 Hi, my name is
                </Typography>
                <Typography variant="h2"
                >
                  Justice Chimobi.
                </Typography>
                <Typography variant="h2"
                >I 
                  build things for the web.
                </Typography>
                <Box className={classes.contentWrapper} pt={3} pb={2}>
                  <Typography variant="subtitle1">
                    I'm a software engineer specializing in building
                    (and occationally designing) exceptional digital
                    experience. Currently, I'm focused on building
                    accessible and  human centered pruducts
                  </Typography>
                </Box>
                <Box>
                  <Link
                    href="https://www.youtube.com/@chimobijustice"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outlined"
                      color="inherit"
                      disableElevation={true}
                      type="button"
                    >
                      Check out my courses
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default HeroSection;