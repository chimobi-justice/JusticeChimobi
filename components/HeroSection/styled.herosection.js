import { styled } from '@mui/system';

export const RootContainer = styled('section')(({ theme }) => ({
  height: '90vh',
  [theme.breakpoints.down('sm')]: {
    height: '70vh',
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  width: '80%',
  position: 'relative',
  textAlign: 'left',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
  '& .MuiTypography-h2': {
    fontSize: '4rem',
    fontWeight: '900',
    color: '#fff',
    margin: '.1em 0px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  '& .MuiTypography-h6': {
    fontSize: '1.3rem',
    fontWeight: '300',
    fontFamily: 'Comfortaa',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem',
    },
  },
}));

export const ContentWrapper = styled('div')(({ theme }) => ({
  width: '50%',
  padding: '10px 0px 6px 0px',
  [theme.breakpoints.down('lg')]: {
    width: '75%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
