import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import App from './App';

router.start();

ReactDOM.render(
    <App router={ router } />,
    document.body
);
