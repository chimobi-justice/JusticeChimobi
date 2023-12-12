import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#121214',
    padding: '5em 0px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 0px',
    },
    '& .MuiGrid-container': {
      '& .MuiGrid-item:nth-child(2)': {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      },
    },
    '& li': {
      fontFamily: 'Comfortaa',
      lineHeight: '1.8em',
      wordSpacing: '.1em',
      fontSize: '14px',
      fontWeight: 500,
    },
    '& form': {
      background: 'white',
      padding: '2em',
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginTop: '2em',
      },
      '& .MuiBox-root': {
        margin: '1.5em 0px',
      },
      '& .success': {
        background: '#2a8f2a',
        padding: '1em',
        textAlign: 'center',
        borderRadius: '3px',
      },

      '& .error': {
        background: 'red',
        padding: '1em',
        textAlign: 'center',
        borderRadius: '3px',
      },
      '& .MuiButton-contained': {
        padding: '1em',
        textTransform: 'inherit',
        '& .MuiCircularProgress-root': {
          color: 'white',
        },
      },
    },
    '& .MuiTypography-h4': {
      fontFamily: 'Comfortaa',
      textAlign: 'center',
      marginBottom: '.8em',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
      },
    },
    '& .MuiTypography-subtitle2': {
      fontFamily: 'Comfortaa',
      margin: '.7em 0px 0px',
      fontSize: '1.1rem',
    },
  },
}));
