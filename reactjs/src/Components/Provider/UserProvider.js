// // src/UserContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem('user');
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   useEffect(() => {
//     if (user) {
//       localStorage.setItem('user', JSON.stringify(user));
//     } else {
//       localStorage.removeItem('user');
//     }
//   }, [user]);

//   const loginUser = (userData) => {
//     setUser(userData);
//     toast.success('Logged in successfully!');
//   };

//   const logoutUser = () => {
//     setUser(null);
//     toast.info('Logged out successfully!');
//   };

//   const updateUser = (updatedData) => {
//     setUser((prevUser) => ({ ...prevUser, ...updatedData }));
//     toast.success('User Details updated successfully!');
//   };

//   return (
//     <UserContext.Provider value={{ user, loginUser, logoutUser, updateUser }}>
//       {children}
//       <ToastContainer />
//     </UserContext.Provider>
//   );
// };


import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../context/Context';

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  
  
    let initialUserData = {
    firstName: 'TestUser',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
    regionState: ''
  };

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const [userDetails, setUserDetails] = useState(initialUserData);



  return (
    <UserContext.Provider value={{ isUserLoggedIn, setUserLoggedIn, userDetails, setUserDetails }}>
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};
