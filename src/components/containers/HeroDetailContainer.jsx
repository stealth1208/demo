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

  goBack = () => {
    this.props.history.push('/super-heroes');
  }

  render() {
    const { detail } = this.state;

    return (
      <>
        <HeroDetail
          data={detail}
          goBack={this.goBack}
        />
      </>
    );
  }
}

export default HeroDetailContainer;
