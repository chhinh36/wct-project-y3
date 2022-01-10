import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {useActionContext} from '../contexts/actionContext';


const Sidebar = () => {
    const {sidebarOpen, closeSidebar} = useActionContext();
    return (
        <aside className={`${sidebarOpen?"sidebar show-sidebar":"sidebar"}`}>
            <div className="header">
                <AiOutlineClose className='icon' onClick={closeSidebar} />
            </div>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Faaculty</a>
                </li>
                <li>
                    <a>Scholarship</a>
                </li>
                <li>
                    <a>Information</a>
                </li>
                <li>
                    <a>School Map</a>
                </li>
                <li>
                    <a>Service</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
