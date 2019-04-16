import React from 'react';

const Description = ({ children, className = '' }) => {
  return (
    <p className={className}>
      { children }
    </p>
  );
};

export default Description;
