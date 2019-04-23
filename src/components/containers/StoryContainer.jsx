import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroStory } from '../../redux/actions/marvelAction';
import { Story, Loading } from '../presentationals';

class StoryContainer extends Component {
  componentWillMount() {
    this.props.getHeroStory(this.props.storyLink);
  }

  render() {
    const { story, isRequesting } = this.props;
    return (
      <>
        {
          isRequesting &&
          <Loading />
        }
        {
          !isRequesting && story &&
          <Story
            data={story}
          />
        }
      </>
    );
  }
}

export default connect((state) => {
  return {
    ...state.heroStoryReducer
  }
}, {
  getHeroStory
})(StoryContainer);
