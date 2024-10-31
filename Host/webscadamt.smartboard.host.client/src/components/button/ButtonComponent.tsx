import React from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from './types';

const ButtonComponent = ({ icon, label, className, disabled, onClick = () => {} }: ButtonProps) => {
  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.currentTarget.blur();
  };
  return (
    <StyledButton
      icon={icon}
      label={label}
      className={className}
      disabled={disabled}
      onClick={(evt) => {
        onClick();
        handleClick(evt);
      }}
    />
  );
};

export default ButtonComponent;
