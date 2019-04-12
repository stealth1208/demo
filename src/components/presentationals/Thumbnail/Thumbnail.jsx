import React from 'react';
import './Thumbnail.scss';

function Thumbnail({ imgSrc, alt='', className='', onClick, id }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick(id);
  }
  return (
    <div className={`${className}  character-thumbnail`} onClick={handleClick}>
      <img src={`${imgSrc}.jpg`} alt={alt} width="100%" />
    </div>
  )
}

export default Thumbnail;