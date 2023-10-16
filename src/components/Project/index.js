import React, { Fragment } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

import { useStyles } from './styled.project';

import { Button } from '../Button';

import { PROJECT_SOURCE } from '../../constant/project';

const Project = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="projects">
      <Container maxWidth="xl" style={{ textAlign: 'center' }}>
        <Typography variant="h4">Projects</Typography>
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
                md={4}
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
                    >
                      <Grid item md={5}>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            fullWidth
                            type="button"
                            disableElevation={true}
                            // disabled={true}
                          >
                            <LanguageIcon fontSize="small" /> Website
                          </Button>
                        </a>
                      </Grid>
                      <Grid item md={5}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            variant="outlined"
                            color="primary"
                            size="medium"
                            fullWidth
                            type="button"
                            disableElevation={true}
                          >
                            <GitHubIcon fontSize="small" /> &nbsp;GitHub
                          </Button>
                        </a>
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
  );
};

export { Project };
