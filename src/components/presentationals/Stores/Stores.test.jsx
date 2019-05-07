import React from 'react';
import renderer from 'react-test-renderer';
import { Stores } from '../index';

it('renders correctly', () => {
  const stores = [{
    alt: "Qoo10 Coupons & Promo Codes",
    categoryId: 0,    
    id: 917,    
    logoUrl: "https://static.shopback.com/uploads/ci/143830/logo-qoo10.gif",
    name: "Qoo10"    
  }];
    const tree = renderer
      .create(
        <Stores 
          stores={stores}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });