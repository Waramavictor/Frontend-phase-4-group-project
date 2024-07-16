
// // BookDetail.jsx
// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { BOOK_DETAILS_URL } from '../API';

// const BookDetail = () => {
//   const [book, setBook] = useState({});
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const { id } = useParams();

//   useEffect(() => {
//     axios.get(`${BOOK_DETAILS_URL}/${id}`)
//       .then(response => {
//         setBook(response.data);
//         setComments(response.data.comments || []);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, [id]);

//   const handleAddComment = () => {
//     setComments([...comments, newComment]);
//     setNewComment('');
//   };

//   return (
//     <div className="book-details">
//       <div className="book-image">
//         <h2>{book?.title}</h2>
//         <img src={book?.image_url} alt={book?.title} />
//       </div>
//       <div className='book-description'>
//         <h2>Description</h2>
//         <p>{book?.description}</p>
//         <h2>Author</h2>
//         <p>{book?.authors}</p>
//         <h2>Genres</h2>
//         <p>{book?.genres}</p>
//         <h2>Comments</h2>
//         <div className="comments">
//           {comments.map((comment, index) => (
//             <p key={index}>{comment}</p>
//           ))}
//           <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
//           <button onClick={handleAddComment}>Add Comment</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookDetail;


import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BOOK_DETAILS_URL = 'http://localhost:5555/book';
const COMMENTS_URL = 'http://localhost:5555/Comment';

const BookDetail = () => {
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
      .then(response => {
        setBook(response.data);
        fetchComments(response.data.id);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const fetchComments = (bookId) => {
    axios.get(`${COMMENTS_URL}/commentlist?book_id=${bookId}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddComment = () => {
    const user_id = 1; // Replace with the actual user ID from your authentication logic

    axios.post(COMMENTS_URL, {
      user_id: user_id,
      book_id: book.id,
      text: newComment,
    })
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment('');
      })
      .catch(error => {
        console.log(error);
      });
  };

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
        <p>{book?.author}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
        <h2>Comments</h2>
        <div className="comments">
          {comments.map((comment, index) => (
            <p key={index}>{comment.text}</p>
          ))}
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
