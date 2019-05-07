import React from 'react';
import renderer from 'react-test-renderer';
import { Category } from '../index';

it('renders correctly', () => {
  const categories = [{
    href: "/all-stores",
    iconUrl: "https://cloud.shopback.com/raw/upload/static/images/icon/core/fire.svg",
    id: 0,
    name: "Popular"
  }];
    const tree = renderer
      .create(
        <Category 
          categories={categories}
          selectCategory={() => {console.log('selected')}}
          selectedCategory={0}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });