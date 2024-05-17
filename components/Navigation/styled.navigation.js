import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    },
  },
  drawer: {
    width: '80%',
    height: '100%',
    background: '#112240',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 10,
    padding: '15px',
    border: 0,
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  drawerClose: {
    textAlign: 'right',
    padding: '3px 2px',
    borderBottom: '1px solid grey'
  },
  drawerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifySelf: 'center',
    textAlign: 'center',
    height: '100%'
  }
}));