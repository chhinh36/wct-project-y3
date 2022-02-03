import React, {useContext, useState, createContext} from "react";



const ActionContext = createContext();

export const ActionContextProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [dashTitle, setDashTitle] = useState("Dashboard");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    const opendForm = () => {
        setShowForm(true);
    }
    const closeForm = () => {
        setShowForm(false);
    }
    return (
        <ActionContext.Provider value={{
            isSidebarOpen,
            toggleSidebar,
            dashTitle,
            setDashTitle,
            showDropdown,
            toggleDropdown,
            showForm,
            opendForm,
            closeForm
        }}>
            {children}
        </ActionContext.Provider>
    );
}
export const useActionContext = () => {
    return useContext(ActionContext);
}