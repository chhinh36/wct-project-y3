import React, {useState} from 'react';
import {
    FormRegistrationFaculty,
    FormRegistrationUni,
    FormRegistrationBackground,
    FormSubmit
} from '../components';


const Registration = () => {
    const [formPage, setFormPage] = useState(1);
    const nextFormPage = () => {
        setFormPage((old)=>{
            let nextPage = old + 1;
            if(nextPage>4){
                nextPage--;
            }
            return nextPage;
        })
    }
    const preFormPage = () => {
        setFormPage((old)=>{
            let prePage = old - 1;
            if(prePage<0){
                prePage = 0;
            }
            return prePage;
        })
    }
    if(formPage===1){
        return (
            <FormRegistrationUni
                nextFormPage={nextFormPage}
            />
        );
    }
    if(formPage===2){
        return (
            <FormRegistrationFaculty
                nextFormPage={nextFormPage}
                preFormPage={preFormPage}
            />
        )
    }
    if(formPage===3){
        return (
            <FormRegistrationBackground
                nextFormPage={nextFormPage}
                preFormPage={preFormPage}
            />
        );
    }
    if(formPage===4){
        return (
            <FormSubmit />
        );
    }
    return (
        <h1>Not found page!</h1>
    );
};

export default Registration;
