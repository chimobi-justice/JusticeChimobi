"use client"

import Link from "next/link"
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import useAnimate from "@/hooks/useAnimate"
import {
  RootContainer,
  Wrapper
} from '@/components/Contact/styled.contact'

const Contact = () => {
  const { ref, controls, variants, transition } = useAnimate();

  return (
    <RootContainer id="contact" ref={ref}>
      <Wrapper>
        <Box
          component={motion.div}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
        >
          <Typography variant="body1" pb={2}>
            <span style={{ color: '#00f900' }}>03. What's next say hi 👋</span>
          </Typography>
          <Typography variant="h2">
            Get In Touch
          </Typography>
          <Typography variant="subtitle1" mb={5} mt={5}>
            While I'm currently content with my current endeavors, I'm always
            open to connecting and exploring new opportunities. Whether you have
            a question, an exciting project to discuss, or simply want to say hello,
            {' '} <span style={{ color: '#00f900' }}>(chimobi.justice@gmail.com)</span> {' '}
            my inbox is always ready and waiting. Feel free to reach out, and I'll do
            my best to respond promptly. Looking forward to hearing from you!
          </Typography>
          <Link href="mailto:chimobi.justice@gmail.com">
            <Button
              variant="outlined"
              color="inherit"
              disableElevation={true}
              type="button"
            >
              Say Hello
            </Button>
          </Link>
        </Box>
      </Wrapper>
    </RootContainer>
  )
}

export default Contact;