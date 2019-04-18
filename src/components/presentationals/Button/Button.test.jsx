import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../index';

it('renders correctly', () => {
    const tree = renderer
      .create(<Button type="button" onClick={() => console.log('Click')}>On Click</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });