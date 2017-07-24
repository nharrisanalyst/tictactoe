import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {storeCreator} from './store/store';
import { Provider } from 'react-redux'

let store = storeCreator();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>   
    <App />
  </Provider>, div);
});
