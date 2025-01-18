import { styled } from '@mui/system';

export const RootContainer = styled('div')({
  height: 'auto',
  padding: '2rem 1rem',
});

export const Wrapper = styled('div')(({ theme }) => ({
  width: '80%',
  margin: '0px auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },

  '& .MuiTypography-h1': {
    fontSize: '3.7rem',
    fontWeight: '900',
    color: 'lightgray',
    margin: '.4em 0px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.1rem',
    },
  },
  '& .MuiTypography-h4': {
    fontSize: '1.7rem',
    fontWeight: '400',
    color: 'lightgray',
    lineHeight: "1.7em",
    margin: '.1em 0px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
}));