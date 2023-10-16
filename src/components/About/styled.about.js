import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#202024',
    padding: '5em 0px',
    color: '#FFF',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 0px',
    },
    '& .MuiTypography-h4': {
      marginBottom: '.5em',
      fontFamily: 'Comfortaa',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        marginTop: '1em',
        fontSize: '1.7rem',
      },
    },
    '& .MuiTypography-subtitle1': {
      fontFamily: 'Comfortaa',
      marginBottom: '1em',
      lineHeight: '1.9em',
      wordSpacing: '.1em',
      fontSize: '14px',
      fontWeight: 500,
    },
  },
}));
