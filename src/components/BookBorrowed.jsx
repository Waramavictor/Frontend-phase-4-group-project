// // BookBorrowed.jsx
// import React from 'react';
// import '../App.css';
// import { useAppContext } from './context/appContext';

// const BookBorrowed = () => {
//   const { borrowedBooks, returnBook } = useAppContext();

//   return (
//     <div className="borrowed-books">
//       {borrowedBooks.length > 0 ? (
//         borrowedBooks.map((book) => (
//           <div key={book.id} className='book'>
//             <div>
//               <h4>{book.title}</h4>
//             </div>
//             <div>
//               <img src={book.image_url} alt={book.title} />
//             </div>
//             <div>
//               <button onClick={() => returnBook(book.id)}>
//                 Return Book
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <h1>You don't have any borrowed books yet.</h1>
//       )}
//     </div>
//   );
// };

// export default BookBorrowed;


import React, { useEffect } from 'react';
import '../App.css';
import { useAppContext } from './context/appContext';

const BookBorrowed = () => {
  const { borrowedBooks, setBorrowedBooks, returnBook } = useAppContext();

  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  const fetchBorrowedBooks = async () => {
    try {
      const response = await fetch('http://localhost:5555/borrowed_book/borrowedlist');
      const data = await response.json();
      setBorrowedBooks(data);
    } catch (error) {
      console.error('Error fetching borrowed books:', error);
    }
  };

  const handleReturnBook = async (id) => {
    try {
      await fetch(`http://localhost:5555/borrowed_book/${id}`, {
        method: 'DELETE',
      });
      returnBook(id);
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

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
              <button onClick={() => handleReturnBook(book.id)}>
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

