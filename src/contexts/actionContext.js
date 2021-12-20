import React, {useContext, useState} from 'react';

const ActionContext = React.createContext();


const ActionProvider = ({children}) => {
    const [isSearch, seIsSearch] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // toggle search
    const OpenSearch = () => {
        seIsSearch(!isSearch);
    }
    // open sidebar
    const openSidebar = () => {
        setSidebarOpen(true);
    }
    // close sidebar
    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <ActionContext.Provider value={{
            isSearch,
            sidebarOpen,
            OpenSearch,
            openSidebar,
            closeSidebar
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