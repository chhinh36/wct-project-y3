import React, {createContext, useContext} from 'react';


const FacultyContextHome = createContext();
const FacultyHomeProvider = ({children}) => {
    return (
        <FacultyContextHome.Provider value={{

        }}>{children}</FacultyContextHome.Provider>
    );
}
const useFacultyContextHome = () => {
    return useContext(FacultyContextHome);
}

export {
    FacultyHomeProvider,
    useFacultyContextHome
}