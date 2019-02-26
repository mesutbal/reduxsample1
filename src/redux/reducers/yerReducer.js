import { YER_EKLE } from '../actions/types';

const initialState = {
    yerAdi: '',
    yerler: []
};

const yerReducer = (state = initialState, action) => {
    switch (action.type) {
        case YER_EKLE:
            return {
                ...state,
                yerler: state.yerler.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };
        default:
            return state;
    }
};

export default yerReducer;
