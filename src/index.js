import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import persistor from "./redux/persistedStore";
import {PersistGate} from 'redux-persist/integration/react'
import store from "./redux/store";
import Loader from "./components/Loader";
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Loader/>} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
