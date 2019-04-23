import React from 'react';

function Story(props) {
  const { data } = props;
  const {
    title,
    startYear,
    rating,
    creators,
    characters
  } = data;
  const creatorItems = creators && creators.items;
  const characterItems = characters && characters.items;

  return (
    <div className="hero-story">
      <strong>From Series: {title}</strong>
      <p className="hero-story__rating">
        <span>Start year: {startYear}</span>
        <strong className="float-right">Rating: {rating}</strong>
      </p>
      {
        !!creatorItems.length &&
        <div className="hero-story__creators">
          <strong>Creators</strong>
          <ul>
            {
              creatorItems.slice(0, 3).map((item, index) => (
                <li key={`${item.name}_${index}`}>{item.name}</li>
              ))
            }
          </ul>
        </div>
      }

      {
        !!characterItems.length &&
        <div>
          <strong className="hero-story__character">Characters</strong>
          <ul>
            {
              characterItems.slice(0, 5).map((item, index) => (
                <li key={`${item.name}_${index}`}>{item.name}</li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  );
}

export default Story;
