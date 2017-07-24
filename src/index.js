import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {storeCreator} from './store/store';
import { Provider } from 'react-redux'




let store = storeCreator();

console.log(store.getState().get('winner'))


ReactDOM.render(
<Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
