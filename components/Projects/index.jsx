"use client"

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import { motion } from 'framer-motion'
import { useStyles } from '@/components/Projects/styled.project'
import { Button } from '@/components/shared/Button'
import { PROJECT_SOURCE } from '@/constant/project'
import useAnimate from '@/hooks/useAnimate'

const Project = () => {
  const classes = useStyles();

  const { ref, controls, variants, transition } = useAnimate();

  return (
    <Box className={classes.root} id="projects" ref={ref}>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Typography variant="h4" gutterBottom
          component={motion.h4} 
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
        >
          <span style={{ color: '#00f900' }}>02.</span> Some Things I’ve Built
        </Typography>

        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          spacing={1}
        >
          {PROJECT_SOURCE.map((project) => (
            <Fragment key={project.title}>
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                component={motion.div} 
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={transition}

                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease"
              >
                <Box className="container">
                  <Image
                    src={project.dest}
                    width={500}
                    height={400}
                    objectFit="contain"
                    layout="responsive"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
                    alt="project preview"
                  />
                  <Box className={classes.content}>
                    <Typography variant="subtitle2">
                      <strong>{project.title}</strong>
                    </Typography>
                    <Typography variant="subtitle1">{project.desc}</Typography>
                    <Typography variant="subtitle1">{project.tools}</Typography>

                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-evenly"
                      spacing={2}
                      p={1}
                    >
                      <Grid item md={6}>
                        <Link
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            variant="contained"
                            color="success"
                            size="medium"
                            fullWidth
                            type="button"
                            disableElevation={true}
                          >
                            <LanguageIcon fontSize="small" /> Website
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item md={6}>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            variant="outlined"
                            color="inherit"
                            size="medium"
                            fullWidth
                            type="button"
                            disableElevation={true}
                          >
                            <GitHubIcon fontSize="small" /> &nbsp;GitHub
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </Box>
  )
};

export default Project;