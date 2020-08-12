import axios from 'axios';
import { 
    FETCH_USER, 
    SIGN_IN,
    FETCH_TEMPLATE,
    UPDATE_TEMPLATE, 
    JWT_TOKEN
} from './types'

// Auth Google Facebook
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
}

// Auth JWT
export const signUp = (userData) => async () => {
    try {
        const res = await axios.post('/auth/signUp', userData);
        if (res.status === 201) {
            window.alert("Berhasil Sign Up")
        };
    } catch (error){
        console.error(error);
    }
}

export const signIn = (userData) => async dispatch => {
    try {
        const res = await axios.post('/auth/signIn', userData);
        localStorage.setItem(JWT_TOKEN, res.data.accesToken);

        if (res.status === 200) {
            window.alert("Berhasil Sign In")
        } else if (res.status === 400) {
            window.alert("Username Anda salah")
        } else {
            window.alert("Password Anda salah")
        };

        dispatch({ type: SIGN_IN, payload: res.data.accesToken });
    } catch (error){
        console.error(error);
    };
}

export const signOut = () => {
    try {
        localStorage.removeItem(JWT_TOKEN);
    } catch (error) {
        console.error(error)
    }
    
}

// Template
export const storeTemplate = (dataTemplate, accesToken) => async dispatch => {
    try {
        const res = await axios({
            method: 'post',
            url: '/api/template',
            data: dataTemplate,
            headers: {
                Authorization: 'Bearer ' + accesToken
            }
        });  
        if (res.status === 201) {
            window.alert("Behasil Simpan Template");
        }      
    } catch (error) {
        console.error(error);
    }
}

export const fetchTemplate = (accesToken) => async dispatch => {
    try {
        const res = await axios({
            method: 'get',
            url: '/api/template',
            headers: {
                Authorization: 'Bearer ' + accesToken
            }
        });  

        dispatch({ type: FETCH_TEMPLATE , payload: res.data });
    } catch (error) {
        console.error(error);    }
}

export const updateTemplate = (id, dataTemplate, accesToken) => async dispatch => {
    try {
        const res = await axios({
            method: 'post',
            url: '/api/template/update/' + id,
            headers: {
                Authorization: 'Bearer ' + accesToken
            },
            data: dataTemplate
        }); 
        console.log(res)
        if (res.status === 200) {
            window.alert("Behasil Update Template");
        };  

        dispatch({ type: UPDATE_TEMPLATE, payload: res.data });
    } catch (error){
        console.error(error);    }
}

export const deleteTemplate = (id, accesToken) => async dispatch => {
    try {
        await axios({
            method: 'delete',
            url: '/api/template/' + id,
            headers: {
                Authorization: 'Bearer ' + accesToken
            }
        }); 
    } catch (error){
        console.error(error);
    }
}

// Stripe
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
}