import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    padding: '2rem 0rem'
  },
  wrapper: {
    width: '80%',
    margin: '0px auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  aboutImage: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    width: 280,
    height: 240,
    [theme.breakpoints.down('md')]: {
      width: '75%',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
    borderRadius: '8px',
    '&:hover img': {
      filter: 'none',
      transform: 'translate(-4px, -4px)',
      boxShadow: '3px 3px 10px green',
      borderRadius: '8px',
    },
    '& img': {
      width: '100%',
      height: '100%',
      filter: 'grayscale(100%)',
      transition: 'filter 0.3s ease',
      borderRadius: '8px'
    },
  }
}))