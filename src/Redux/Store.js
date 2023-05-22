// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './Language/Langugereducer';


// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;




import { combineReducers, applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

//reducers

import rootReducer from './Language/Langugereducer';




//persist

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";




const persistConfig = {

    key: "root",

    storage,

};




const allReducers = combineReducers({ rootReducer });

const persistedReducer = persistReducer(persistConfig, allReducers);




const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;