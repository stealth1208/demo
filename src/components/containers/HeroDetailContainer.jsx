import React, { Component } from 'react';
import { getCharacterDetail } from '../../api/marvelApi';
import {
  HeroDetail,
  Loading
} from '../presentationals';

class HeroDetailContainer extends Component {
  state = {
    detail: {},
    isLoading: true
  };

  async componentWillMount() {
    const detail = await getCharacterDetail(this.props.match.params.id);
    this.setState({
      detail: detail.results && detail.results[0],
      isLoading: false
    });
  }

  goBack = () => {
    this.props.history.push('/super-heroes');
  }

  render() {
    const { detail, isLoading } = this.state;

    return (
      <>
        {
          isLoading && <Loading />
        }
        {
          !isLoading &&
          <HeroDetail
            data={detail}
            goBack={this.goBack}
          />
        }
      </>
    );
  }
}

export default HeroDetailContainer;
