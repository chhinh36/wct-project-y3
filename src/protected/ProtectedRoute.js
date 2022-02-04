import React from 'react';
import {Navigate} from 'react-router-dom';
import {useUserContext} from '../contexts/userContext';

const ProtectedRoute = ({children}) => {
    const {myUser} = useUserContext();
    if(!myUser){
        return <Navigate to='/' />
    }
  return children;
};

export default ProtectedRoute;
