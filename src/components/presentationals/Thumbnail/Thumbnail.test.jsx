import React from 'react';
import renderer from 'react-test-renderer';
import { Thumbnail } from '../index';

it('renders correctly', () => {
    const tree = renderer
      .create(<Thumbnail src="src.jgp" alt="" onClick={() => console.log('onClick')}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });