import React from 'react';
import {Navigate} from 'react-router-dom';
import {useUserContext} from '../contexts/userContext';

const DashProtectedRoute = ({children}) => {
    const {myUser} = useUserContext();
    if(myUser.role==='user'){
        return <Navigate to='/' />
    }
    return children;
};

export default DashProtectedRoute;
