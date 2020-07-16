import axios from 'axios';
import { FETCH_USER, TAMBAH_DATA_BARANG, STORE_TEMPLATE, ERROR_CREATE_TEMPLATE } from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
}

export const storeTemplate = (template) => async dispatch => {
    
    try {
        const response = await axios.post('/api/new_template', template);
        dispatch({ type: STORE_TEMPLATE, payload: response.data });
    } catch (error) {
        dispatch({ type: ERROR_CREATE_TEMPLATE, payload: { data: [], error: true } });
    }
}










export const tambahDataBarang = (barang) => {
    return (dispatch) => {
        dispatch({
            type: TAMBAH_DATA_BARANG,
            barang: barang
        });
    }
};

export const addIncrement = () => {
    return (dispatch) => {
        dispatch({
            type: 'increment',
        });
    }
};
