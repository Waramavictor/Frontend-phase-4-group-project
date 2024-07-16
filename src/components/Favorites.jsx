
// //favorites.jsx//
// import React, { useState } from 'react';
// import '../App.css';
// import { useAppContext } from './context/appContext';

// const Favorites = () => {
//   const { favorites, removeFavorites } = useAppContext();
//   const [showFavorites, setShowFavorites] = useState(false);

//   const toggleFavorites = () => {
//     setShowFavorites(!showFavorites);
//   };

//   return (
//     <div className="favorites">
//       <button onClick={toggleFavorites}>
//         {showFavorites ? "Hide Favorites" : "Show Favorites"}
//       </button>

//       {showFavorites && favorites.length > 0 ? (
//         favorites.map((book) => (
//           <div key={book.id} className='book'>
//             <div>
//               <h4>{book.title}</h4>
//             </div>
//             <div>
//               <img src={book.image_url} alt={book.title} />
//             </div>
//             <div>
//               <button onClick={() => removeFavorites(book.id)}>
//                 Remove from Favorites
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         showFavorites && <h1>You don't have any favorite books yet.</h1>
//       )}
//     </div>
//   );
// };

// export default Favorites;



import React, { useState, useEffect } from 'react';
import '../App.css';
import { useAppContext } from './context/appContext';

const Favorites = () => {
  const { favorites, setFavorites, removeFavorites } = useAppContext();
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  useEffect(() => {
    if (showFavorites) {
      fetchFavorites();
    }
  }, [showFavorites]);

  const fetchFavorites = async () => {
    try {
      const response = await fetch('http://localhost:5555/favourite/favlist');
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const removeFavorite = async (id) => {
    try {
      await fetch(`http://localhost:5555/favourite/${id}`, {
        method: 'DELETE',
      });
      removeFavorites(id);
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
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
              <button onClick={() => removeFavorite(book.id)}>
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
