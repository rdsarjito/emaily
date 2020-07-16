import axios from 'axios';
import { FETCH_USER, TAMBAH_DATA_BARANG, STORE_TEMPLATE } from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
}

export const storeTemplate = (template) => async dispatch => {
    const res = await axios.post('/api/newTemplate', template);

    dispatch({ type: STORE_TEMPLATE, payload: res.data });
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
