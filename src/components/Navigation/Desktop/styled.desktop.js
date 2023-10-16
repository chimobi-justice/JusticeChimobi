import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: '#202024',
    color: 'white',
    '& a': {
      textDecoration: 'none',
      color: 'white',
    },
    '& .MuiTypography-h6': {
      fontFamily: 'Comfortaa',
    },
    '& .MuiTypography-subtitle2': {
      fontFamily: 'Comfortaa',
      transition: 'color .5s',
      '&:hover': {
        cursor: 'pointer',
        color: '#c1c1c1',
      },
    },
  },
});
