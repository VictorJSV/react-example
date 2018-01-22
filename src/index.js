import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchContainer from './containers/SearchContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchContainer />, document.getElementById('root'));
registerServiceWorker();
