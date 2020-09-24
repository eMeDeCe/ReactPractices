import { Button } from '@material-ui/core';
import React from 'react';
import './styles.css';

export const ButtonComponent = ({ label, style, onClick }) => {
  const classStyle = 'myButton';

  return (
    <>
      <div className={classStyle} style={style} onClick={onClick}>
        {label}
      </div>
    </>
  );
};

//   <ButtonComponent label="hola"></ButtonComponent>
// import { ButtonComponent } from 'common/components/button';
