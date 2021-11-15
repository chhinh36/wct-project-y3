import React, {useContext, useState} from 'react';

const ActionContext = React.createContext();


const ActionProvider = ({children}) => {
    const [isSearch, seIsSearch] = useState(false);



    const OpenSearch = () => {
        seIsSearch(!isSearch);
    }

    return (
        <ActionContext.Provider value={{
            isSearch,
            OpenSearch
        }}>{children}</ActionContext.Provider>
    );
}

const useActionContext = () => {
    return useContext(ActionContext);
}

export {
    ActionProvider,
    useActionContext
};