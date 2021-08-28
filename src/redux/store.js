import {combineReducers,createStore} from 'redux';
import {inputsStateReducer} from './reducers/pros-cons-state';


const store = createStore(combineReducers({
  inputsState: inputsStateReducer
}));



export default store;