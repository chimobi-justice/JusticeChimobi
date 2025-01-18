"use client"

import Link from "next/link"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { PROFILE_LINK } from '@/constant/profile-link'
import { motion } from 'framer-motion'
import useAnimate from "@/hooks/useAnimate"

const Footer = () => {
  const { ref, controls, variants, transition } = useAnimate();

  const currentYear = new Date().getFullYear().toString();

  return (
    <Box component={motion.footer}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={transition}
      whileInView={{ opacity: 1 }}
    >
      <Box
        width={{ md: "80%", sm: "100%" }}
        margin={"2px auto"}
      >
        <Typography
          variant="body2"
          pt={5}
          pb={2}
          ml={2}
        >
          &copy; {currentYear} - Developed and built by&nbsp;
          <Link href="https://github.com/chimobi-justice"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--primary-base-color)' }}
          >
            Justice Chimobi
          </Link>
        </Typography>
        <Box mb={"20px"}>
          {PROFILE_LINK.map((link, index) => (
            <Box component="span" key={index}>
              <Link href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                <IconButton>
                  {link.icon}
                </IconButton>
                <Box
                  component="span"
                  sx={{ textDecoration: "underline", pl: "5px", pr: "5px" }}
                >
                  {link.name}
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Footer;