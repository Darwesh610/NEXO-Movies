import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all'
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function Counter() {
    return 15;
}

let store = createStore(Counter);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
