import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './modules/store';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  target
);

registerServiceWorker();
