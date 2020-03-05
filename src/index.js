import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/createStore';

ReactDOM.render((
   <Provider store = {store}>
        <App />
   </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
