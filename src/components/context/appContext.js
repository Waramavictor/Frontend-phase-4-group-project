
// import React, { createContext, useContext, useState } from "react";

// const AppContext = createContext();

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("useAppContext must be used within an AppProvider");
//   }
//   return context;
// };

// const AppContextProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const addFavorites = (book) => {
//     setFavorites((prevFavorites) => [...prevFavorites, book]);
//   };

//   const removeFavorites = (id) => {
//     setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id));
//   };

//   const login = (email, password) => {
//     // Implement your login logic here
//     // For now, we'll just simulate a successful login
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AppContext.Provider value={{ favorites, addFavorites, removeFavorites, isAuthenticated, login, logout }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;







// appcontext.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id));
  };

  const borrowBook = (book) => {
    setBorrowedBooks((prevBorrowedBooks) => [...prevBorrowedBooks, book]);
  };

  const returnBook = (id) => {
    setBorrowedBooks((prevBorrowedBooks) => prevBorrowedBooks.filter((book) => book.id !== id));
  };

  const login = (email, password) => {
    // Implement your login logic here
    // For now, we'll just simulate a successful login
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider value={{ favorites, addFavorites, removeFavorites, borrowedBooks, borrowBook, returnBook, isAuthenticated, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
