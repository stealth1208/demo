import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

const CategoryItem = ({ iconUrl, name, href, selectCategory, id, selected }) => {
  const itemClassname = classname('category__item', {
    'category__item--selected': selected
  });

  return (
    <div 
      className={itemClassname} 
      onClick={() => selectCategory(id)}
    >
      <div className="category__item__image">
        <img src={iconUrl} alt={name} />
      </div>
      <a className="category__item__link" href={href}>
        { name }
      </a>
    </div>
  );
};

CategoryItem.propTypes = {
  iconUrl: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string,
  selectCategory: PropTypes.func,
  id: PropTypes.number,
  selected: PropTypes.bool
};

export default CategoryItem;
