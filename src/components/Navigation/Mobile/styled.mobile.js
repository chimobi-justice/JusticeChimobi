import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    padding: '.8em 1em',
    height: (isToggled) => (isToggled ? 'auto' : '60px'),
    overflow: 'hidden',
  },
  drawer: {
    margin: '1em',
    '& .MuiTypography-subtitle2': {
      padding: '1em 0px',
      fontFamily: 'Comfortaa',
    },
  },
});
