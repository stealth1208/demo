import React from 'react';
import {
  Title,
  Thumbnail,
  Description,
  Button
} from '../index';
import { StoryContainer } from '../../containers';
import get from 'lodash.get';

function HeroDetail(props) {
  const { data, goBack } = props;
  const {
    name,
    thumbnail,
    description
  } = data;

  const storyLink = get(data, 'series.collectionURI', '');

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
        storyLink &&
        <StoryContainer
          storyLink={storyLink}
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
