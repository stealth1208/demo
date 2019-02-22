import React from 'react';
import './Photo.scss';

const Photo = ({ url = 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG' }) => {
  return (
    <div className="">
      <img src={url} alt="" />
    </div>
  );
};

export default Photo;