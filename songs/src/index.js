import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Provider should be imported from react-redux, not redux(not using Context!)
import { createStore } from 'redux'; //Store is a single object that combines Reducers and Action Creators
import App from './components/App';
import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App /> 
    </Provider>, document.querySelector('#root')
    );