import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {sidebar} from '../utils/NavLink';
import '../styles/sidebar.scss';
import {useActionContext} from '../contexts/actionContext';

const Sidebar = () => {
  const {pathname} = useLocation();
  const {isSidebarOpen, setDashTitle} = useActionContext();
  React.useEffect(()=>{
    sidebar.forEach((item)=>{
      if(pathname.split('/').includes(item.path)){
        setDashTitle(item.text);
      }
    })
  }, [pathname]);
  return (
      <div className={isSidebarOpen ? "sidebar-wrapper":"sidebar-wrapper hide-sidebar"}>
        <div className="link-wrapper">
          {
            sidebar.map(item=>{
              return (
                <NavLink end key={item.id} to={item.path} className="nav-link" onClick={()=>setDashTitle(item.text)}>
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              );
            })
          }
        </div>
      </div>
  );
};

export default Sidebar;
