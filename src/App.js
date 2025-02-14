
// App.js
import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import BookBorrowed from './components/BookBorrowed';
import Login from './components/Login';
import { useAppContext } from './components/context/appContext';

function App() {
  const { isAuthenticated } = useAppContext();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/borrowed-books" element={<BookBorrowed />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
