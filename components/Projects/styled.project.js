import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5em 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 0px',
    }
  },
  wrapper: {
    width: '80%',
    margin: '0px auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '& .MuiTypography-h4': {
      textAlign: 'left',
      marginBottom: '.5em',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
      },
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