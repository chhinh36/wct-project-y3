import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActionProvider} from './contexts/actionContext';
import {UserContextProvider} from './contexts/userContext';
import {RegistrationProvider} from './contexts/registrationContext';
import {FacultyHomeProvider} from './contexts/facultyContextHome';



ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ActionProvider>
        <FacultyHomeProvider>
          <RegistrationProvider>
            <App />
          </RegistrationProvider>
        </FacultyHomeProvider>
      </ActionProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
