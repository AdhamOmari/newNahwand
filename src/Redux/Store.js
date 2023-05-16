import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Language/Langugereducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
