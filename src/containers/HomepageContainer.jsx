import React, { Component } from 'react';
import { Planets } from '../components';
import { getCharList } from'../api/charApi';

class HomepageContainer extends Component {
  state = {
    charList: []
  }

  async componentWillMount() {
    const charList = await getCharList();
    this.setState({
      charList
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Homepage
        <Planets />
        <Planets />
      </div>
    );
  }
}

export default HomepageContainer;