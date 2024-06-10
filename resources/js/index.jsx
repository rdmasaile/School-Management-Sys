import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (document.getElementById('discussion')) {
    ReactDOM.render(<App />, document.getElementById('discussion'));
}
else if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}