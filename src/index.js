import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./Store/reducer";

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
