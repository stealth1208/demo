import React from 'react';

const Title = ({ children, isTitle = false }) => {
  return (
    <>
      {
        isTitle &&
        <h1>
          { children }
        </h1>
      }
      {
        !isTitle &&
        { children }
      }
    </>
  );
};

export default Title;