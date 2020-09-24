import { Button } from '@material-ui/core';
import React from 'react';
import './styles.css';

interface ButtonProps {
  label: string;
  style?: {};
  classStyle?: string;
  onClick?: void;
}

export const ButtonComponent = ButtonProps => {
  const classStyle = 'myButton';
  return (
    <>
      <div
        style={ButtonProps.style}
        className={ButtonProps.classStyle}
        onClick={ButtonProps.onClick}
      >
        {ButtonProps.label}
      </div>
    </>
  );
};
