import { styled } from '@mui/system';

export const RootContainer = styled('section')(({ theme }) => ({
  height: 'auto',
  padding: '3rem 2rem',

  [theme.breakpoints.down('sm')]: {
    padding: '2rem 0rem',
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  width: '60%',
  margin: '0px auto',
  textAlign: 'center',

  [theme.breakpoints.down('lg')]: {
    width: '90%',
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },

  '& .MuiTypography-h2': {
    fontSize: '4rem',
    fontWeight: '900',
    margin: '.1em 0px',

    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
}));
