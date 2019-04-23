import React, { Component } from 'react';
import {
  HeroDetail,
  Loading
} from '../presentationals';
import { connect } from 'react-redux';
import { getHeroDetail } from '../../redux/actions/marvelAction';

class HeroDetailContainer extends Component {
  componentWillMount() {
    this.props.getHeroDetail(this.props.match.params.id);
  }

  goBack = () => {
    this.props.history.push('/super-heroes');
  }

  render() {
    const { heroDetail, isRequesting } = this.props;

    return (
      <>
        {
          isRequesting && <Loading />
        }
        {
          !isRequesting &&
          <HeroDetail
            data={heroDetail}
            goBack={this.goBack}
          />
        }
      </>
    );
  }
}

const mapDispatchToProps = {
  getHeroDetail
};

function mapStateToProps(state) {
  return {
    ...state.heroDetailReducer
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetailContainer);
