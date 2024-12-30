"use client"

import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import { motion } from 'framer-motion'
import useAnimate from '@/hooks/useAnimate'
import { 
  RootContainer, 
  Wrapper, 
  AboutImage 
} from '@/components/About/styled.about'

const About = () => {
  const { ref, controls, variants, transition } = useAnimate();

  return (
    <RootContainer id="about" ref={ref}>
      <Wrapper>
        <Typography variant="h4" gutterBottom
          component={motion.h4}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
        >
          <span style={{ color: 'var(--primary-base-color)' }}>01.</span> About Me
        </Typography>

        <Grid container spacing={6}>
          <Grid item lg={8} md={7} sm={12} xs={12}
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={transition}
            whileInView={{ opacity: 1 }}
          >
            <Box>
              <Typography variant="subtitle1">
                Justice, a <span style={{ color: 'var(--primary-base-color)' }}>multi-disciplinary</span> Software Engineer&nbsp;
                based in Lagos, Nigeria, is passionate about&nbsp;
                creating web and mobile applications. By day, he&nbsp;
                delves into various <span style={{ color: 'var(--primary-base-color)' }}>technical challenges</span>, while&nbsp;
                at night, he transforms into a technical writer, and also share's his knowledge on <span style={{ color: 'var(--primary-base-color)' }}>YouTube.</span>
              </Typography>
              <Typography variant="subtitle1">
                Justice is deeply involved in the tech community and&nbsp;
                loves <span style={{ color: 'var(--primary-base-color)' }}>open-source projects.</span> His expertise lies in&nbsp;
                building interactive and responsive apps, creating optimized <span style={{ color: 'var(--primary-base-color)' }}>RESTFUL API's</span> and prioritizing&nbsp;
                accessibility for both web and mobile platforms.
              </Typography>
              <Typography variant="subtitle1">
                He embraces a <span style={{ color: 'var(--primary-base-color)' }}>mobile-first</span> approach and focuses on&nbsp;
                optimizing offline user experiences. When he's not&nbsp;
                coding or learning, Justice enjoys playing console&nbsp;
                games and listening to music.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1">
                Here are a <span style={{ color: 'var(--primary-base-color)' }}>few technologies</span> I’ve been <span style={{ color: '#00f900' }}>working</span> with recently:</Typography>
              <Grid container spacing={4}>
                <Grid item md={4}>
                  <Typography variant="subtitle2">Reactjs</Typography>
                  <Typography variant="subtitle2">TypeScript</Typography>
                  <Typography variant="subtitle2">Nextjs</Typography>
                  <Typography variant="subtitle2">Chakra UI</Typography>
                  <Typography variant="subtitle2">MUI</Typography>
                  <Typography variant="subtitle2">Ant Design</Typography>
                  <Typography variant="subtitle2">React Query</Typography>
                </Grid>

                <Grid item md={4}>
                  <Typography variant="subtitle2">Redux</Typography>
                  <Typography variant="subtitle2">TailwindCss</Typography>
                  <Typography variant="subtitle2">styled-component</Typography>
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
            whileInView={{ opacity: 1 }}
          >
            <AboutImage>
              <Image
                src="/about-img.jpg"
                width={280}
                height={240}
                alt="my photo"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
              />
            </AboutImage>
          </Grid>
        </Grid>
      </Wrapper>
    </RootContainer>
  )
}

export default About;