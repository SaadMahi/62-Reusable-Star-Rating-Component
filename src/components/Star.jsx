import React, { useState } from 'react';

// * PropTypes package
import PropTypes from 'prop-types';

/**
 * ? prop types
 * * with prop types we can specify
 * * the type of value that we expect
 * * the consumer of the component to
 * * pass in for each of the props
 *
 * ! if we really want to get serious with type
 * ! checking it is recommended to use typeScript
 *
 * ! note: we only do it if it's important for our app
 * ! developers don't use this anymore
 *
 * ? but lets use react's built in propTypes
 * * we need to import prop type obj from the PropTypes package
 * * you can see on line no. 4 we have imported it
 * ! note: we don't need to install this package as create react app come with this
 * ! But we do need to import it as shown on line no. 4 as it is separate package from react
 */

const Star = ({
  length = 5,
  color = '#fcc419',
  starSize = 30,
  messages = [],
  defaultRating = 0,
  movieRatingLength = 0,
}) => {
  Star.propTypes = {
    length: PropTypes.number,
    color: PropTypes.string,
    starSize: PropTypes.number,
    messages: PropTypes.array,
    defaultRating: PropTypes.number,
  };

  // * star icon styling
  const star = {
    height: `${starSize}px`,
    widht: `${starSize}px`,

    cursor: 'pointer',
  };

  // * empty star icon svg
  const emptyStartIcon = (
    <svg
      style={star}
      role='button'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={color}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='{2}'
        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
      />
    </svg>
  );

  // * full star icon svg
  const fullStarIcon = (
    <svg
      style={star}
      role='button'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill={color}
      stroke={color}
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </svg>
  );

  // * inner container of star container
  /* const innerContainer = {
  minWidth: '200px',
}; */

  // * star icon outer container
  const starContainer = {
    display: 'flex',

    gap: '20px',
    // border: '2px solid blue',

    minWidth: '250px',

    /*position: 'relative', */
  };

  // * span tag star number
  const spanStyle = {
    color: color,
    // border: '2px solid red',

    /* position: 'absolute',
    right: 0, */
  };

  // * star icon inner container
  const innerContainer = {
    // border: '2px solid green',
  };

  // * useState to extract clicked value from stars
  const [rating, setRating] = useState(defaultRating);

  // * useState to add hover effect
  const [temporaryRating, setTemporaryRating] = useState(0);

  return (
    <div style={starContainer}>
      <div style={innerContainer}>
        {Array.from({ length: length }, (_, i) => (
          <span
            onClick={() => {
              setRating(i + 1);
              {
                movieRatingLength && movieRatingLength(i + 1);
              }
            }}
            onMouseEnter={() => setTemporaryRating(i + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            key={i + 1}
          >
            {temporaryRating >= i + 1 || rating >= i + 1
              ? fullStarIcon
              : emptyStartIcon}
          </span>
        ))}
      </div>
      <span style={spanStyle}>
        {messages.length === length
          ? messages[temporaryRating ? temporaryRating - 1 : rating - 1]
          : temporaryRating || rating || ''}
      </span>
    </div>
  );
};

export default Star;
