import axios from 'axios';
import { 
    FETCH_USER, 
    FETCH_TEMPLATE, 
    STORE_TEMPLATE, 
    ERROR_CREATE_TEMPLATE, 
    ERROR_FETCH_TEMPLATE, 
    DELETE_TEMPLATE, 
    ERROR_DELETE_TEMPLATE, 
    UPDATE_TEMPLATE, 
    ERROR_UPDATE_TEMPLATE, 
    FETCH_DATA, 
    FIND_DATA, 
} from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
}

export const findData = (data) => async dispatch => {
    try {
        const res = await axios.post('/auth/signIn', data);
        console.log(res.data)
        dispatch({ type: FIND_DATA, payload: res.data })
    } catch (error){
        console.error();
    }
}

export const fetchData = (data) => async dispatch => {
    const res = await axios.post('/api/post', data);
    console.log(res)
    dispatch({ type: FETCH_DATA, payload: res.data })
}

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
}

export const storeTemplate = (template) => async dispatch => {
    try {
        const response = await axios.post('/api/template', template);
        dispatch({ type: STORE_TEMPLATE, payload: response.data });
    } catch (error) {
        dispatch({ type: ERROR_CREATE_TEMPLATE, payload: { data: [], error: true } });
    }
};

export const fetchTemplate = () => async dispatch => {
    try {
        const res = await axios.get('/api/template');
        dispatch({ type: FETCH_TEMPLATE , payload: res.data });
    } catch (error) {
        dispatch({ type: ERROR_FETCH_TEMPLATE, payload: { data: [], error: true} });
    }
};

export const updateTemplate = (id, template) => async dispatch => {
    try {
        const res = await axios.post('/api/template/update/' + id, template);
        dispatch({ type: UPDATE_TEMPLATE, payload: res.data });
    } catch {
        dispatch({ type: ERROR_UPDATE_TEMPLATE, payload: { data: [], error: true} })
    }
}

export const deleteTemplate = (id) => async dispatch => {
    try {
        const res = await axios.delete('/api/template/'+id);
        dispatch({ type: DELETE_TEMPLATE , payload: res.data });
    } catch {
        dispatch({ type: ERROR_DELETE_TEMPLATE, payload: { data: [], error: true} });
    }
}