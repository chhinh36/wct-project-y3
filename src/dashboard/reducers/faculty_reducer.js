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
const faculty_reducer = (state, action) => {
    if(action.type===FACULTY_LOADING){
        return {
            ...state,
            loading: action.payload
        }
    }
    if(action.type===FACULTY_ERROR){
        return {
            ...state,
            error: action.payload
        }
    }
    if(action.type===FETCH_FACULT){
        return {
            ...state,
            faculty: action.payload
        }
    }
    if(action.type===CREATE_FACULTY){
        return {
            ...state,
            faculty: [action.payload, ...state.faculty]
        }
    }
    if(action.type===CREATE_FACULTY_LOADING){
        return {
            ...state,
            create_loading: action.payload
        }
    }
    if(action.type===DELETE_FACULTY){
        const tpmFaculty = state.faculty.filter((item)=>item._id!==action.payload);
        return {
            ...state,
            faculty: tpmFaculty
        }
    }
    if(action.type===SET_EDIT_FACULTY){
        return {
            ...state,
            edit_faculty: action.payload
        }
    }
    if(action.type===SET_FACULTY_ID){
        return {
            ...state,
            edit_facultyId: action.payload
        }
    }
    if(action.type===UPDATE_FACULTY){
        const {_id: facultyId} = action.payload;
        const updateFucalty = state.faculty.map((item)=>{
            if(item._id===facultyId){
                return action.payload;
            }
            return item;
        })
        return {
            ...state,
            faculty: updateFucalty
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`);
}

export default faculty_reducer;