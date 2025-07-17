"use client"

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion'
import useAnimate from '@/hooks/useAnimate'
import {
  RootContainer,
  Wrapper,
} from '@/components/Skills/styled.skills'

const Skills = () => {
  const { ref, controls, variants, transition } = useAnimate();

  return (
    <RootContainer id="skills" ref={ref}>
      <Wrapper>
        <Box
           component={motion.h2} 
           variants={variants}
           initial="hidden"
           animate={controls}
           transition={transition}
           whileInView={{ opacity: 1 }}
        >
          <Box width={{ md: "60%", sm: "100%"}}>
            <Typography variant="h3">
              Tools & Softwares
            </Typography>
            <Typography variant="h5">
              Over the years, I had the opportunity to work with various software, tools and frameworks. Here are some of them:
            </Typography>
          </Box>

          <Stack
            spacing={{ xs: 2, sm: 3 }}
            direction="row"
            alignItems="center"
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <Typography variant="subtitle2">Reactjs / Nextjs</Typography>
            <Typography variant="subtitle2">TypeScript</Typography>
            <Typography variant="subtitle2">Chakra UI</Typography>
            <Typography variant="subtitle2">MUI</Typography>
            <Typography variant="subtitle2">Ant Design</Typography>
            <Typography variant="subtitle2">React Query</Typography>

            <Typography variant="subtitle2">Redux</Typography>
            <Typography variant="subtitle2">TailwindCss</Typography>
            <Typography variant="subtitle2">styled-component</Typography>
            <Typography variant="subtitle2">Laravel</Typography>
            <Typography variant="subtitle2">PHP</Typography>
          </Stack>
        </Box>
      </Wrapper>
    </RootContainer>
  )
}

export default Skills;