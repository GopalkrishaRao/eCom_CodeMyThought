
import React, { useContext, useState, createContext } from 'react';
// import {  ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import userContext from '../context/Context';

// import {userContext} from '../Contexts/Context';

export const AuthContext=createContext();

export const useUser = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  
  
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
    <AuthContext.Provider value={{ isUserLoggedIn, setUserLoggedIn, userDetails, setUserDetails }}>
      {children}
      {/* <ToastContainer /> */}
    </AuthContext.Provider>
  );
};
