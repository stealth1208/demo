import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from '../index';

it('renders correctly', () => {
    const tree = renderer
      .create(<Title isTitle={true}>Title</Title>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });