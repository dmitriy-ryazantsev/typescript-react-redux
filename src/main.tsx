import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';


const applicationContainer = document.getElementById('application-root');
const application = <Hello compiler='TypeScript' framework='React'/>;
ReactDOM.render(application, applicationContainer);