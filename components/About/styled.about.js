import { styled } from '@mui/system';

export const RootContainer = styled('div')({
  height: 'auto',
  padding: '2rem 1rem',
});

export const Wrapper = styled('div')(({ theme }) => ({
  width: '80%',
  margin: '0px auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const AboutImage = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  overflow: 'hidden',
  width: 380,
  height: 450,
  [theme.breakpoints.down('md')]: {
    height: 310,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
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
    borderRadius: '8px',
  },
}));
