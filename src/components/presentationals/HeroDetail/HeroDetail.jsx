import React from 'react';
import {
  Title,
  Thumbnail,
  Description,
  Button,
  Story
} from '../index';

function HeroDetail(props) {
  const { data, goBack } = props;
  const {
    name,
    thumbnail,
    description,
    series      
  } = data;

  return (
    <div className="hero-detail">
      <Thumbnail
        src={thumbnail}
      />
      <Title
        isTitle={true}
        className="hero-detail__title"
      >
        { name }
      </Title>
      <Description
      >
        { description }
      </Description>
      {
        series && 
        <Story
          series={series}          
        />
      }
      <Button
        onClick={goBack}
      >
        Go back
      </Button>
    </div>
  );
}

export default HeroDetail;