import React, { Component } from 'react';
import {
  Photo,
  Caption,
  Title,
  Description
} from '../../components';
import './Planets.scss';

class Planets extends Component {
  render() {
    return (
      <div className="planets">
        <div className="planets_item">
          <Photo />
          <Caption />
          <Title />
          <Description />
          <div>
            <button>Like</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Planets;