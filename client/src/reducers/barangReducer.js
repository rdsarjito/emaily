import { TAMBAH_DATA_BARANG } from '../actions/types';

const initialState = {
    listBarang: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TAMBAH_DATA_BARANG:
            const listBaru = state.listBarang;
            listBaru.push(action.barang);
            return { listBarang: listBaru }
    
        default:
            return state;
    }
};