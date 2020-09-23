import { Button } from '@material-ui/core';
import React from 'react';
import './styles.css';

interface ButtonTitle {
  name: string;
}
export const ButtonComponent = ({ label }) => {
  return (
    <>
      <div className="myButton">{label}</div>
    </>
  );
};
