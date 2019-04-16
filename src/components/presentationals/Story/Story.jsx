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
    console.log('Series', this.state)
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
          <div>
            <strong>From Series: {title}</strong>
            <div>Start year: {startYear}</div>
            <div>Rating: {rating}</div>
            {
              !!creatorItems.length &&
              <div>
                <strong>Creators</strong>
                <ul>
                  {
                    creatorItems.slice(0, 3).map(item => (
                      <li>{item.name}</li>
                    ))
                  }
                </ul>
              </div>
            }
    
            {
              !!characterItems.length &&
              <div>
                <strong>Characters</strong>
                <ul>
                  {
                    characterItems.slice(0, 5).map(item => (
                      <li>{item.name}</li>                  
                    ))
                  }
                </ul>
              </div>
            }
          </div>
        }        
      </div>
    );
  }
}

export default Story;
