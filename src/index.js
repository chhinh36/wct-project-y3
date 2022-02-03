import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActionProvider} from './contexts/actionContext';
import {UserContextProvider} from './contexts/userContext';



ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ActionProvider>
        <App />
      </ActionProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
