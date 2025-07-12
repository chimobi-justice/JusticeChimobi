"use client"

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import { PROJECT_SOURCE, PUBLISH_PACKAGES_SOURCE } from '@/constant/project'
import useAnimate from '@/hooks/useAnimate'
import {
  RootContainer,
  Wrapper,
  Content,
  ProjectImage
} from '@/components/Projects/styled.project'

const Project = () => {
  const { ref, controls, variants, transition } = useAnimate();

  return (
    <RootContainer id="projects" ref={ref}>
      <Wrapper>
        <Typography
          variant="h3"
          gutterBottom
          component={motion.h3}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
          whileInView={{ opacity: 1 }}
        >
          Featured Projects
        </Typography>

        <Grid
          container
          spacing={6}
          alignItems={"center"}
          mt={8}
        >
          {PROJECT_SOURCE.map((project) => (
            <Fragment key={project.title}>
              <Grid
                item
                lg={6}
                md={6}
                sm={10}
                xs={12}
                component={motion.div}
                variant={variants}
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={transition}
                whileInView={{ opacity: 1 }}
              >
                <Content>
                  <Typography variant="h6" pt={1} pb={1}>
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
                          <GitHubIcon fontSize="small" /> &nbsp; GitHub
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Content>
              </Grid>

              <Grid
                item
                lg={6}
                md={6}
                sm={10}
                xs={12}
                component={motion.div}
                variant={variants}
                variants={variants}
                initial="hidden"
                animate={controls}
                transition={transition}
                whileInView={{ opacity: 1 }}
              >
                <ProjectImage>
                  <Image
                    src={project.dest}
                    width={280}
                    height={240}
                    alt="my photo"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
                  />
                </ProjectImage>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Wrapper>

      <Box pt={"35px"}>
        <Wrapper>
          <Typography
            variant="h3"
            gutterBottom
            component={motion.h3}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={transition}
            whileInView={{ opacity: 1 }}
          >
            Publish Packages
          </Typography>

          <Grid
            container
            spacing={6}
            alignItems={"center"}
            mt={8}
          >
            {PUBLISH_PACKAGES_SOURCE.map((project) => (
              <Fragment key={project.title}>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={10}
                  xs={12}
                  component={motion.div}
                  variant={variants}
                  variants={variants}
                  initial="hidden"
                  animate={controls}
                  transition={transition}
                  whileInView={{ opacity: 1 }}
                >
                  <Content>
                    <Typography variant="h6" pt={1} pb={1}>
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
                          href={project.NPM}
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
                            <LanguageIcon fontSize="small" /> NPM
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
                            <GitHubIcon fontSize="small" /> &nbsp; GitHub
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Content>
                </Grid>

                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={10}
                  xs={12}
                  component={motion.div}
                  variant={variants}
                  variants={variants}
                  initial="hidden"
                  animate={controls}
                  transition={transition}
                  whileInView={{ opacity: 1 }}
                >
                  <ProjectImage>
                    <Image
                      src={project.dest}
                      width={280}
                      height={240}
                      alt="my photo"
                      quality={100}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
                    />
                  </ProjectImage>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Wrapper>
      </Box>
    </RootContainer>
  )
};

export default Project;