import { Button as MButton } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledButton = styled(MButton)(({ variant }) => ({
  border: '1px solid #00f900',
  color: variant && variant.includes('contained') ? 'white' : '#00f900',
  transition: 'transform 0.3s ease-in-out box-shadow, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translate(-2px, -2px)',
    boxShadow: '3px 3px 10px green'
  }
}));

const Button = ({
  children,
  variant,
  color,
  size,
  disabled,
  disableElevation,
  type,
  href,
  handleClick,
  fullWidth,
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
      disableElevation={disableElevation}
      onClick={handleClick}
      href={href}
    >
      {children}
    </StyledButton>
  );
};


export { Button };