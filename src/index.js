import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/theme.css';

ReactDOM.render(
 <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);
serviceWorker.unregister();
