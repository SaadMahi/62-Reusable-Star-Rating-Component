import React from 'react';
import Star from '../Star';

// * container styling
const paraContainer = {
  border: 'solid pink 2px',
  borderRadius: '15px',
};

const Paragraph = ({ movieRatingLength, movieRated }) => {
  return (
    <div style={paraContainer}>
      <Star
        length={5}
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
        movieRatingLength={movieRatingLength}
        color='blue'
      />
      <p>this movie is rated {movieRated}</p>
    </div>
  );
};

export default Paragraph;
