import React from 'react';
import './Thumbnail.scss';

function Thumbnail({ imgSrc, alt="" }) {
  return (
    <img src={`${imgSrc}.jpg`} alt={alt} width="100px" />    
  )
}

export default Thumbnail;