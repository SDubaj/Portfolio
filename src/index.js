import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './CSS/App.scss';
import './App.css';
import './CSS/Navbar.scss';
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
