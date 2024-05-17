import { styled } from '@mui/system';

export const DrawerContainer = styled('section')(({ theme }) => ({
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

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const DrawerClose = styled('div')(() => ({
  textAlign: 'right',
  padding: '3px 2px',
  borderBottom: '1px solid grey',
}));

export const DrawerBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  textAlign: 'center',
  height: '100%',
}));
