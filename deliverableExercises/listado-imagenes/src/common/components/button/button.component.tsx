import React from 'react';
import './styles.css';

interface ButtonProps {
  label: string;
  style?: {};
  classStyle?: string;
  onClick?: void;
}

export const ButtonComponent = ButtonProps => {
  /*const classStyle = 'myButton'; Así, se añade sin problemas*/
  return (
    <>
      <div
        className={ButtonProps.classStyle}
        style={ButtonProps.style}
        onClick={ButtonProps.onClick}
      >
        {ButtonProps.label}
      </div>
    </>
  );
};
