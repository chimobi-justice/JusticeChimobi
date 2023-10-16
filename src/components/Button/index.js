import React from 'react';
import { Button as MButton } from '@mui/material';

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
    <MButton
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
    </MButton>
  );
};

export { Button };
