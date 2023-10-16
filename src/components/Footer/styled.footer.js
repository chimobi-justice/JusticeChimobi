import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1.5em',
    '& .MuiGrid-container': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
      },
      '& .MuiGrid-item': {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
          margin: '.4em 0px',
        },
      },
    },
    '& .icon': {
      padding: '0px 1em',
      color: 'white',
    },
  },
}));
