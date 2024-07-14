
// //appContext//
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

//   const addFavorites = (book) => {
//     setFavorites((prevFavorites) => [...prevFavorites, book]);
//   };

//   const removeFavorites = (id) => {
//     setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id));
//   };

//   return (
//     <AppContext.Provider value={{ favorites, addFavorites, removeFavorites }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;






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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id));
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
    <AppContext.Provider value={{ favorites, addFavorites, removeFavorites, isAuthenticated, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
