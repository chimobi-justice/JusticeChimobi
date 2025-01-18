import { styled } from '@mui/system'

export const RootContainer = styled('section')({
  height: 'auto',
  padding: '2rem 1rem',
});

export const Wrapper = styled('div')(({ theme }) => ({
  width: '80%',
  margin: '2rem auto',
  position: 'relative',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  '& .MuiTypography-h3': {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'lightgray',
    margin: '.1em 0px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  '& .MuiTypography-h5': {
    fontSize: '1.2rem',
    fontWeight: '900',
    marginBottom: '1.4em',
    marginTop: '1em',
    lineHeight: "1.9em",
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
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
  '& .MuiTypography-subtitle2': {
    color: 'var(--primary-base-color)',
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '.4em'
  }
}));