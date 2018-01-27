import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

export function storeCreator(){
      return createStore(reducer,applyMiddleware(thunk))

}
