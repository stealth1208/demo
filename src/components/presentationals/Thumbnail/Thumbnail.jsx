import React from 'react';
// import './Thumbnail.scss';
import get from 'lodash.get';

function Thumbnail({ src = {}, alt='', className='', onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }    
  }

  const path = get(src, 'path', '');
  const extension = get(src, 'extension', '');
  const imgSrc = `${path}.${extension}`;

  return (
    <div className={`${className} character-thumbnail`} onClick={handleClick}>
      <img
        src={imgSrc}
        alt={alt}
        width="100%"
      />
    </div>
  )
}

export default Thumbnail;