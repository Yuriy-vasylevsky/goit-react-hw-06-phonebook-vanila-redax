import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from '../redux/contact/contact-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

// const reducer = (state = initialValue, action) => state;

const store = createStore(rootReducer, composeWithDevTools());
export default store;
