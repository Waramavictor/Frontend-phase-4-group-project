
//favorites.jsx//
import React, { useState } from 'react';
import '../App.css';
import { useAppContext } from './context/appContext';

const Favorites = () => {
  const { favorites, removeFavorites } = useAppContext();
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="favorites">
      <button onClick={toggleFavorites}>
        {showFavorites ? "Hide Favorites" : "Show Favorites"}
      </button>

      {showFavorites && favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className='book'>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt={book.title} />
            </div>
            <div>
              <button onClick={() => removeFavorites(book.id)}>
                Remove from Favorites
              </button>
            </div>
          </div>
        ))
      ) : (
        showFavorites && <h1>You don't have any favorite books yet.</h1>
      )}
    </div>
  );
};

export default Favorites;



