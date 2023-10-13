import Star from './components/Star';
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';
import { useState } from 'react';

function App() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <div>
        <Star length={5} color={'red'} starSize={25} />
        <Star length={5} color={'green'} starSize={35} defaultRating={3} />
        <Star
          length={5}
          messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
        />
      </div>
      <Paragraph movieRatingLength={setMovieRating} movieRated={movieRating} />
    </>
  );
}

export default App;
