import React, {createContext, useContext, useReducer, useState} from 'react';
import PhotoUpload from '../../images/photo-upload.jpg';
import reducer from '../reducers/faculty_reducer';
import axios from 'axios';
import {
    FACULTY_LOADING,
    FETCH_FACULT,
    FACULTY_ERROR,
    CREATE_FACULTY,
    CREATE_FACULTY_LOADING,
    DELETE_FACULTY,
    SET_EDIT_FACULTY,
    SET_FACULTY_ID,
    UPDATE_FACULTY
} from '../action';



const initialState = {
    loading: true,
    error: false,
    faculty: [],
    create_loading: false,
    edit_faculty: false,
    edit_facultyId: ""
};
const FacultyContext = createContext();
const FacultyProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [photoBox, setPhotoBox] = useState({photoBanner: PhotoUpload, photoAbout: PhotoUpload});
    const [inputFaculty, setInputFaculty] = useState({
        name: "",
        subtitle: "",
        description: "",
        photoBanner: {
        imageName: "",
        url: ""
        },
        photoAbout: {
        imageName: "",
        url: ""
        }
    });
    const emptyInputFaculty = () => {
        setInputFaculty({
            name: "",
            subtitle: "",
            description: "",
            photoBanner: {
                imageName: "",
                url: ""
            },
            photoAbout: {
                imageName: "",
                url: ""
            }
        })
    }


    const setEditFaculty = (edit) => {
        dispatch({type: SET_EDIT_FACULTY, payload: edit});
    }
    const createFaculty = async (faculty) => {
        dispatch({type: CREATE_FACULTY_LOADING, payload: true})
        try {
            const {data} = await axios.post('/api/v1/faculty', faculty);
            console.log(data.faculty);
            dispatch({type: CREATE_FACULTY, payload: data.faculty});
            dispatch({type: CREATE_FACULTY_LOADING, payload: false})
            return {error: false, msg: "Create successfully."};
        } catch (error) {
            dispatch({type: CREATE_FACULTY_LOADING, payload: false})
            if(error.response){
                return {error: true, msg: error.response.data.msg}
            }
        }
    }
    const updateFaculty = async (faculty, facultyId) => {
        dispatch({type: CREATE_FACULTY_LOADING, payload: true});
        try {
            const {data} = await axios.patch(`/api/v1/faculty/${facultyId}`, faculty);
            dispatch({type: UPDATE_FACULTY, payload: data.faculty});
            dispatch({type: CREATE_FACULTY_LOADING, payload: false})
            return {error: false, msg: "Faculty has been updated."};
        } catch (error) {
            dispatch({type: CREATE_FACULTY_LOADING, payload: false})
            if(error.response){
                return {error: true, msg: error.response.data.msg}
            }
        }
    }

    const deleteFaculty = async (facultyId) => {
        try {
            await axios.delete(`/api/v1/faculty/${facultyId}`);
            dispatch({type: DELETE_FACULTY, payload: facultyId});
            return {error: false, msg: "Item has been deleted."};
        } catch (error) {
            return {error: true, msg: "Delete error!"};
        }
    }

    const fetchFaculty = async (url) => {
        dispatch({type: FACULTY_LOADING, payload: true});
        try {
            const {data} = await axios.get(url);
            dispatch({type: FETCH_FACULT, payload: data.faculty});
            dispatch({type: FACULTY_ERROR, payload: false});
        } catch (error) {
            dispatch({type: FACULTY_ERROR, payload: true});
        }
        dispatch({type: FACULTY_LOADING, payload: false});
    }

    const setFacultyEditId = (facultyId) => {
        dispatch({type: SET_FACULTY_ID, payload: facultyId});
    }

    return (
        <FacultyContext.Provider value={{
            ...state,
            fetchFaculty,
            createFaculty,
            deleteFaculty,
            inputFaculty,
            emptyInputFaculty,
            setInputFaculty,
            setEditFaculty,
            photoBox,
            setPhotoBox,
            updateFaculty,
            setFacultyEditId,
        }}>{children}</FacultyContext.Provider>
    );
}

const useFacultyContext = () => {
    return useContext(FacultyContext);
}

export {
    FacultyProvider,
    useFacultyContext
}