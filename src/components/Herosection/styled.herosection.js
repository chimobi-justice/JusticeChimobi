import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#121214',
    height: '90vh',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    },
  },
  wrapper: {
    width: '50%',
    position: 'relative',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '& .MuiTypography-h1': {
      fontSize: '1.5rem',
      fontFamily: 'Comfortaa',
      fontWeight: 300,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    '& .MuiTypography-h2': {
      fontSize: '4rem',
      fontWeight: '900',
      fontFamily: 'Comfortaa',

      margin: '.1em 0px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    '& .MuiTypography-h3': {
      fontSize: '2.2rem',
      fontWeight: '300',
      fontFamily: 'Comfortaa',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2em',
      },
    },
    '& .MuiButton-contained': {
      width: '25%',
      margin: '2em 0px 1em',
      textTransform: 'inherit',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },
    },
  },
}));
