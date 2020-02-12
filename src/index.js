import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store1 from './Store';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store1}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

