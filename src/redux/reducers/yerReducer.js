import { YER_EKLE, YER_SIL } from '../actions/types';

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
        case YER_SIL:
            return {
                ...state,
                yerler: state.yerler.slice(0, -1)
            };
        default:
            return state;
    }
};

export default yerReducer;
