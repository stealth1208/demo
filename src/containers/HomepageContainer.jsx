import React, { Component } from 'react';
import { Planets } from '../components';

class HomepageContainer extends Component {
  render() {
    return (
      <div>
        Homepage
        <Planets />
      </div>
    );
  }
}

export default HomepageContainer;