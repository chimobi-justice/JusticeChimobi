import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#202024',
    padding: '5em 0px',
    color: '#FFF',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 0px',
    },
    '& a': {
      textDecoration: 'none',
    },
    '& .MuiTypography-h4': {
      fontFamily: 'Comfortaa',
      textAlign: 'center',
      marginBottom: '.5em',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
      },
    },
    '& .MuiTypography-subtitle2': {
      fontFamily: 'Comfortaa',
      margin: '.7em 0px',
      fontSize: '1.1rem',
    },
    '& .MuiTypography-subtitle1': {
      fontFamily: 'Comfortaa',
      marginBottom: '1em',
      lineHeight: '1.9em',
      wordSpacing: '.1em',
      fontSize: '14px',
      fontWeight: 500,
    },
    '& .MuiButton-contained': {
      display: 'flex',
      alignItems: 'flex-start',
      textTransform: 'inherit',
    },
    '& .MuiButton-outlined': {
      display: 'flex',
      alignItems: 'flex-start',
      color: 'white',
      textTransform: 'inherit',
    },
    '& .MuiGrid-item': {
      marginBottom: '1em',
      '& .container': {
        padding: '1em',
        transition: 'transform .5s',
        '&:hover': {
          background: '#121214',
          borderRadius: '10px',
          cursor: 'pointer',
          transform: 'scale(1.01)',
        },
      },
    },
    '& .MuiSvgIcon-root': {
      marginRight: '.2em',
    },
  },
  content: {
    textAlign: 'left',
    width: '90%',
    margin: 'auto',
    overflow: 'hidden',
  },
}));
