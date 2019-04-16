import React, { Component } from 'react';
import {
  Title,
  Thumbnail,
  Description,
  Button,
  Series
} from '../index';

import './HeroDetail.scss';

class HeroDetail extends Component {
  render() {
    const { data } = this.props;
    const {
      name,
      thumbnail,
      description,
      series
    } = data;

    return (
      <div className="hero-detail">
        <Title
          isTitle={true}
        >
          { name }
        </Title>
        <Thumbnail
          src={thumbnail}
        />
        <Description>
          { description }
        </Description>
        <Series
          series={series}
        />
      </div>
    );
  }
}

export default HeroDetail;