import React, {useContext, createContext} from 'react';

const RegistrationContext = createContext();
const RegistrationProvider = ({children}) => {
    return (
        <RegistrationContext.Provider value={{
            
        }}>{children}</RegistrationContext.Provider>
    );
}
const useRegistrationContext = () => {
    return useContext(RegistrationContext);
}

export {
    RegistrationProvider,
    useRegistrationContext
}