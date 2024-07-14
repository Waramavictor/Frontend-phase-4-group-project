// BookBorrowed.jsx
import React from 'react';
import '../App.css';
import { useAppContext } from './context/appContext';

const BookBorrowed = () => {
  const { borrowedBooks, returnBook } = useAppContext();

  return (
    <div className="borrowed-books">
      {borrowedBooks.length > 0 ? (
        borrowedBooks.map((book) => (
          <div key={book.id} className='book'>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt={book.title} />
            </div>
            <div>
              <button onClick={() => returnBook(book.id)}>
                Return Book
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any borrowed books yet.</h1>
      )}
    </div>
  );
};

export default BookBorrowed;
