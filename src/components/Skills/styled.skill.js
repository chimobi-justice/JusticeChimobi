import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#121214',
    padding: '5em 0px',
    color: '#FFF',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 0px',
    },
    '& img': {
      margin: '.4em !important',
    },
    '& .MuiTypography-h4': {
      fontFamily: 'Comfortaa',
      textAlign: 'left',
      marginBottom: '.5em',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
      },
    },
    '& .MuiTypography-subtitle1': {
      fontFamily: 'Comfortaa',
      lineHeight: '1.9em',
      wordSpacing: '.1em',
      fontSize: '14px',
      fontWeight: 500,
    },
    '& .MuiGrid-container': {
      '& .MuiGrid-item': {
        '& img': {
          margin: '.4em',
        },
      },
    },
  },
}));
