import React, { Component } from 'react';
import get from 'lodash.get';
import { getCharacterStory } from '../../../api/marvelApi';

class Story extends Component {
  state = {
    story: null
  };
  
  async componentWillMount() {
    const collectionURI = get(this.props, 'series.collectionURI', '');    
    if (collectionURI) {
      const stories = await getCharacterStory(collectionURI);      
      this.setState({
        story: stories.results[0]
      });
    }
  }

  render() {
    const { story } = this.state;
    if (!story) {
      return  <p>Loading</p>;
    }
    
    const {
      title,
      startYear,
      rating,
      creators,
      characters
    } = story;
    const creatorItems = creators && creators.items;
    const characterItems = characters && characters.items;

    return (
      <div>
        {
          story &&
          <div className="hero-story">
            <strong>From Series: {title}</strong>
            <p className="hero-story__rating">
              <span>Start year: {startYear}</span>
              <strong className="float-right">Rating: {rating}</strong>
            </p>
            {
              !!creatorItems.length &&
              <p className="hero-story__creators">
                <strong>Creators</strong>
                <ul>
                  {
                    creatorItems.slice(0, 3).map(item => (
                      <li>{item.name}</li>
                    ))
                  }
                </ul>
              </p>
            }
    
            {
              !!characterItems.length &&
              <p>
                <strong className="hero-story__character">Characters</strong>
                <ul>
                  {
                    characterItems.slice(0, 5).map(item => (
                      <li>{item.name}</li>                  
                    ))
                  }
                </ul>
              </p>
            }
          </div>
        }        
      </div>
    );
  }
}

export default Story;
