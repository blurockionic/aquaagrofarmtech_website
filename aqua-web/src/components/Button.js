import React from 'react';
import '../App.css';

const Button = ({ label, secondary }) => {
  return (
    <button className={secondary ? 'button secondary' : 'button primary'}>
      {label}
    </button>
  );
};

export default Button;
