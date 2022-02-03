import React, {createContext, useContext, useState, useEffect, useCallback} from 'react';
import axios from 'axios';



const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [myUser, setMyUse] = useState(null);
    const [loading, setLoading] = useState(true);
    const showMe =useCallback( async () => {
        try {
            const {data} = await axios.get('/api/v1/users/showMe');
            saveUser(data.user);
        } catch (error) {
            removeUser();
        }
        setLoading(false);
    }, []);
    const saveUser = (user) => {
        setMyUse(user);
    }
    const removeUser = () => {
        setMyUse(null);
    }

    useEffect(()=>{
        showMe();
    }, [showMe])
    return (
        <UserContext.Provider value={{
            myUser,
            loading,
            saveUser,
            removeUser,
            setLoading
        }}>{children}</UserContext.Provider>
    );
}

const useUserContext = () => {
    return useContext(UserContext);
}

export {
    UserContextProvider,
    useUserContext
}