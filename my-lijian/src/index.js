import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import iconfont from './iconfont/iconfont.css'
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
