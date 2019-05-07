import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../CategoryItem/CategoryItem';

const Category = ({ categories, selectCategory, selectedCategory }) => {
  return (
    <div className="categories">
      {
        categories.map(item => (
          <CategoryItem
            key={item.id}
            iconUrl={item.iconUrl}
            name={item.name}
            selectCategory={selectCategory}
            id={item.id}
            selected={selectedCategory === item.id}
          />
        ))
      }
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.array,
  selectCategory: PropTypes.func,
  selectedCategory: PropTypes.number
};

export default Category;