import {createStore} from 'redux';
import reducer from '../reducer/reducer';

export function storeCreator(){
      return createStore(reducer)

}
