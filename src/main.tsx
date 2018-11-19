import React from 'react';
import ReactDOM from 'react-dom';
import { ApplicationState } from './types/applicationState';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import root from './reducers';
import Application from './containers/Application';


const store = createStore<ApplicationState, any, any, any>(root);
const applicationContainer = document.getElementById('application-root');
const application = (
    <Provider store={store}>
        <Application/>
    </Provider>
);
ReactDOM.render(application, applicationContainer);