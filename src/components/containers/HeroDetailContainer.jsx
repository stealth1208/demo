import React, { Component } from 'react';
import { getCharacterDetail } from '../../api/marvelApi';
import {
  HeroDetail
} from '../presentationals';

class HeroDetailContainer extends Component {
  state = {
    detail: {}
  };

  async componentWillMount() {
    const detail = await getCharacterDetail(this.props.match.params.id);
    this.setState({
      detail: detail.results && detail.results[0]
    });
  }

  render() {
    const { detail } = this.state;

    return (
      <>
        <HeroDetail
          data={detail}
        />
      </>
    );
  }
}

export default HeroDetailContainer;
