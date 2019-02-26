import { createStore, combineReducers } from 'redux';
import yerReducer from '../reducers/yerReducer';

const rootReducer = combineReducers({
    yerler: yerReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
