import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router';

import Navbar from './components/common/navbar/Navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();