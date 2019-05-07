import React from 'react';
import PropTypes from 'prop-types';

const Stores = ({ stores }) => {
  return (
    <div className="stores">
      {
        stores.map((item, index) => (
          <div className="stores__item" key={`${item.id}_${index}`}>
            <div className="stores__item__image">
              <img src={item.logoUrl} alt={item.alt}/>
            </div>
            <div className="stores__item__name"> { item.name }</div>
          </div>
        ))
      }
    </div>
  );
};

Stores.propTypes = {
  stores: PropTypes.array,
};

export default Stores;