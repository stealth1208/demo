import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../index';

it('renders correctly', () => {
    const tree = renderer
      .create(<Header><div>Header menu</div></Header>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });