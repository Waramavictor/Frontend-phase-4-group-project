
// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>INKWELL BOOK STORE</h1>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
        <Link to="/borrowed-books">
          <h3>Borrowed Books</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
