"use client"

import Link from "next/link"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { PROFILE_LINK } from "@/constant/profile-link"
import { motion } from 'framer-motion'
import useAnimate from "@/hooks/useAnimate"

const Footer = () => {
  const { ref, controls, variants, transition } = useAnimate();

  const currentYear = new Date().getFullYear().toString();

  return (
    <Box component={motion.footer} textAlign="center" pt={10} pb={5} 
      ref={ref} 
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={transition}
      whileInView={{ opacity: 1 }}
    >
      <Typography variant="body2" p={2}>
        &copy; {currentYear} - Developed and built by&nbsp;
        <Link href="https://github.com/chimobi-justice"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--primary-base-color)' }}
        >
          Justice Chimobi
        </Link>
      </Typography>
      <Box>
        {PROFILE_LINK.map((link, index) => (
          <Box component="span" pr={1} key={index}>
            <Link href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                {link.icon}
              </IconButton>
            </Link>
          </Box>
        ))}
      </Box>

      <Typography variant="body2" p={2}>
        Credit By&nbsp;
        <Link href="https://github.com/bchiang7"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--primary-base-color)' }}
        >
          Brittany Chiang.
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer;