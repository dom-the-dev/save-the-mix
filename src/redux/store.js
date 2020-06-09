import {createStore, compose, applyMiddleware} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = process.env.NODE_ENV === "development" ? [logger]: []

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        applyMiddleware(...middleware)
    )
);

export default store;
