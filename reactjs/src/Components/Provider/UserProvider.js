
import React, { useContext, useState } from 'react';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import userContext from '../context/Context';
import {userContext} from '../context/Context';

export const useUser = () => useContext(userContext);

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
    <userContext.Provider value={{ isUserLoggedIn, setUserLoggedIn, userDetails, setUserDetails }}>
      {children}
      <ToastContainer />
    </userContext.Provider>
  );
};
