import React from 'react';
import {useUserContext} from '../contexts/userContext';

const AuthWrapper = ({children}) => {
    const {loading} = useUserContext();
    if(loading){
        return (
            <div className="app-loading">
                <div className="lds-ring-app-load"><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
    return children;
};

export default AuthWrapper;
