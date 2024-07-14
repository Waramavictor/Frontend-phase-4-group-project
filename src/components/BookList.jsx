
// BookList.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addFavorites, removeFavorites, borrowBook } = useAppContext();
  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='book-list'>
      {books.map((book) => (
        <div key={book.id} className='book'>
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              alt={book.title}
              onClick={() => navigate(`/books/${book.id}`)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => removeFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addFavorites(book)}>
                Add to Favorites
              </button>
            )}
            <button onClick={() => borrowBook(book)}>
              Borrow Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
