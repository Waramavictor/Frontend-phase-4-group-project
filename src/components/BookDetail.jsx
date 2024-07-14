
//BookDetail.jsx//
import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../API';

const BookDetail = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="book-details">
      <div className="book-image">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt={book?.title} />
      </div>
      <div className='book-description'>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Author</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
}

export default BookDetail;





