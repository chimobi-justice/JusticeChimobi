import React, { useState, useRef } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import { useStyles } from './styled.contact';

import { Button } from '../Button';

import emailjs from '@emailjs/browser';

const validationSchema = yup.object().shape({
  fullname: yup.string().required('Required*'),
  email: yup
    .string()
    .required('Required*')
    .email('Enter a vaild email address'),
  message: yup.string().required('Required*'),
});

const Contact = () => {
  const classes = useStyles();
  const [info, setInfo] = useState('');
  const [status, setStatus] = useState(true);

  const formRef = useRef()

  const _handleSubmit = () => {
    emailjs
    .sendForm(
      'service_lhqjdhb',
      'template_jm6r3lc',
      formRef.current,
      'QsQj2knIbRDX--j2W'
    )
    .then(
      (response) => {
        setInfo('Message sent successfully we get back to you shortly');
        setStatus(true);
      },
      (err) => {
        setInfo('An error occured. Please try again later');
        setStatus(false);
      }
    );
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: '',
    },
    onSubmit: _handleSubmit,
    validationSchema,
  });

  const {
    values: { fullname, email, message },
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    resetForm,
  } = formik;

  return (
    <Box className={classes.root} id="contact">
      <Container maxWidth="lg">
        <Typography variant="h4">Contact</Typography>
        <Grid container alignItems="flex-start" justifyContent="space-between">
          <Grid
            item
            md={6}
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <Typography variant="subtitle2">
              <strong>You can also shoot me a message</strong>
            </Typography>
            <ul className="list-disc px-3 hidden md:block font-light">
              <li>If you want to see more projects</li>
              <li>If you want me to be featured on your next project</li>
              <li>If you want to get in touch</li>
              <li>If you want me to be part of your team</li>
              <li>Or simply email me: <a href="mailto:chimobi.justice@gmail.com" style={{color: 'white', textDecoration: 'none'}}>chimobi.justice@gmail.com</a></li>
            </ul>
          </Grid>
          <Grid
            item
            sm={12}
            md={5}
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <form onSubmit={handleSubmit} ref={formRef}>
              {/* {info ? <Snackbar message={info} status={status} /> : ''} */}
              {info ? <Box className={ status === true ? 'success' : 'error'}>{info}</Box> : ''}
              <Box>
                <TextField
                  type="text"
                  name="fullname"
                  label="Fullname"
                  fullWidth
                  color="primary"
                  size="small"
                  value={fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.fullname && errors.fullname}
                  error={touched.fullname && Boolean(errors.fullname)}
                />
              </Box>
              <Box>
                <TextField
                  type="email"
                  name="email"
                  label="Email Address"
                  fullWidth
                  color="primary"
                  size="small"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
              </Box>
              <Box>
                <TextField
                  rows={4}
                  multiline
                  type="text"
                  name="message"
                  label="Message"
                  fullWidth
                  size="small"
                  color="primary"
                  value={message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.message && errors.message}
                  error={touched.message && Boolean(errors.message)}
                />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="medium"
                  type="submit"
                  disableElevation={false}
                  disabled={!fullname || !email || !message || isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={20} />
                  ) : (
                    <span>Shoot 🚀</span>
                  )}
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { Contact };
