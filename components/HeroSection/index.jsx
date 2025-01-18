"use client"

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
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
                <Typography variant="h1"
                >
                  Justice Chimobi
                </Typography>
                <Typography variant="h2"
                >
                  Software Engineer & Frontend Developer
                </Typography>
                <ContentWrapper>
                  <Typography variant="subtitle1" lineHeight="2em">
                    👋 I'm passionate about ♿️ accessibility, 😍 user experience and 🎨 human centered products.
                  </Typography>
                </ContentWrapper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </RootContainer>
  )
}

export default HeroSection;