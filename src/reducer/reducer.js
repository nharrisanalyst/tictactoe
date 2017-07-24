import {move, startGame} from "./reducer_core.js";
import {fromJS} from 'immutable';

const initial_state = fromJS({
       turn:"",
       winner:false,
       board:[
           {text:"",won:false, id:0},
           {text:"",won:false, id:1},
           {text:"",won:false, id:2},
           {text:"",won:false, id:3},
           {text:"",won:false, id:4},
           {text:"",won:false, id:5},
           {text:"",won:false, id:6},
           {text:"",won:false, id:7},
           {text:"",won:false, id:8}
         ]

});

function reducer(state=initial_state, action={type:undefined}){
   switch(action.type){
     case "Execute_Move":
       return move(state, action.index)
     case "Restart":
     return initial_state;
     case "Start_Game":
       return startGame(state,action.turn)
     default:
     return state;
   }




}


export default reducer;
