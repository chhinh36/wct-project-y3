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
                    <a href="/" onClick={(e)=>e.preventDefault()}>Home</a>
                </li>
                <li>
                    <a href="/" onClick={(e)=>e.preventDefault()}>Faaculty</a>
                </li>
                <li>
                    <a href="/" onClick={(e)=>e.preventDefault()}>Scholarship</a>
                </li>
                <li>
                    <a href="/" onClick={(e)=>e.preventDefault()}>Information</a>
                </li>
                <li>
                    <a href="/" onClick={(e)=>e.preventDefault()}>School Map</a>
                </li>
                <li>
                    <a href="/" onClick={(e)=>e.preventDefault()}>Service</a>
                </li>
                <li>
                    <a href="/" onClick={(e)=>e.preventDefault()}>Contact</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
