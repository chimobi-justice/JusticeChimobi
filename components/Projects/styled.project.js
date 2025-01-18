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
    width: '100%',
  },
  '& .MuiTypography-h4': {
    textAlign: 'left',
    marginBottom: '.5em',
    padding: '12px',
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
}));

export const Content = styled('div')(() => ({
  textAlign: 'left',
  width: '90%',
  margin: 'auto',
  overflow: 'hidden',
}));
