import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './components/style/awesome-board.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
