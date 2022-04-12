import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //from react-redux! not react!
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
