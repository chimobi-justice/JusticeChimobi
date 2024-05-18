"use client"

import Link from "next/link"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Button } from "@/components/shared/Button"
import { motion } from 'framer-motion'
import useAnimate from "@/hooks/useAnimate"
import {
  RootContainer,
  Wrapper,
  ContentWrapper
} from '@/components/HeroSection/styled.herosection'

const HeroSection = () => {
  const { ref, controls, variants, transition } = useAnimate();

  return (
    <RootContainer id="home" ref={ref}>
      <Wrapper>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item>
              <Box component={motion.div}
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={transition}
                whileInView={{ opacity: 1 }}
              >
                <Typography variant="h6"
                  style={{ color: 'var(--primary-base-color)' }}
                >
                  👋 Hi, my name is
                </Typography>
                <Typography variant="h2"
                >
                  Justice Chimobi.
                </Typography>
                <Typography variant="h2"
                >
                  I build things for the web.
                </Typography>
                <ContentWrapper>
                  <Typography variant="subtitle1">
                    I'm a software engineer specializing in building
                    and occationally designing exceptional digital
                    experience. Currently, I'm focused on building
                    accessible and  human centered pruducts
                  </Typography>
                </ContentWrapper>
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
      </Wrapper>
    </RootContainer>
  )
}

export default HeroSection;