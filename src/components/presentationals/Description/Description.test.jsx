import React from 'react';
import renderer from 'react-test-renderer';
import { Description } from '../index';

it('renders correctly', () => {
    const tree = renderer
      .create(<Description>Description</Description>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });