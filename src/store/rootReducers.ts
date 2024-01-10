import { combineReducers } from 'redux';
import exampleReducer from '../features/example/exampleSlice';

export default combineReducers({
	example: exampleReducer,
});
