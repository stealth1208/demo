import React from 'react';
import './Button.scss';

const Button = ({ children, className }) => {
  return (
    <button type="button" className={`primary-button ${className}`}>
      { children }
    </button>
  );
};

export default Button;