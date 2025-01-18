import { styled } from '@mui/system';

export const RootContainer = styled('section')(({ theme }) => ({
  padding: '4em 1px',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: '3em 0px',
  },
}));

export const Wrapper = styled('div')(({ theme }) => ({
  width: '80%',
  margin: '2rem auto',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
  '& .MuiTypography-h3': {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'lightgray',
    margin: '.1em 0px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  '& .MuiGrid-item': {
    marginBottom: '1em',
    '& .container': {
      padding: '1em',
    },
  },
  '& .MuiSvgIcon-root': {
    marginRight: '.2em',
  },
}));

export const Content = styled('div')(() => ({
  textAlign: 'left',
  width: '100%',
  margin: 'auto',
  overflow: 'hidden',
}));


export const ProjectImage = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  overflow: 'hidden',
  width: 500,
  height: 300,
  [theme.breakpoints.down('md')]: {
    height: 400,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 270,
  },
  borderRadius: '8px',
  '& img': {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  },
}));
