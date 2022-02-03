import React from 'react';
import '../styles/loadForm.scss';
import {form} from '../utils/FormPopup';
import {useActionContext} from '../contexts/actionContext';

const LoadForm = () => {
    const {showForm, dashTitle} = useActionContext();
    return (
        <div className={showForm?"form-wrapper show-form":"form-wrapper"}>
            {form[dashTitle]}
        </div>
    );
};

export default LoadForm;
