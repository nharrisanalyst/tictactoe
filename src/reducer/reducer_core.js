import {Map, List} from 'immutable';
import {executeMove} from '../actions/actions';



//function to check if their is a winner

const winner = (board) =>{
    const numbers = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,4,8],
                    [2,4,6],
                    [1,4,7],
                    [0,3,6],
                    [2,5,8]]
  for (let i = 0; i < numbers.length; i++) {
    const [a, b, c] = numbers[i];

      if ((board.getIn([a,"text"])==="X"||board.getIn([a,"text"])==="O") && board.getIn([a,"text"]) === board.getIn([b,"text"]) && board.getIn([a,"text"]) === board.getIn([c,"text"])) {

            return {won:true, lines:[a,b,c]};
            }
          }
          return {won:false, lines:[0,1,2]};

}









function move(state, index){
        if(state.getIn(['board',index,'text'])==="X"||state.getIn(['board',index,'text'])==="O"||state.get('winner')){
           return state;

        }else{




       const turn = state.get("turn");
       state = state.set("turn",turn==="O"?"X":"O");
       state=state.setIn(["board",index,"text"],turn);
      const didWin =  winner(state.get('board'))
       const [a,b,c] =didWin.lines;

      state = state.set("winner",didWin.won);

      state=state.setIn(["board",a,"won"],didWin.won===true?true:false);
      state=state.setIn(["board",b,"won"],didWin.won===true?true:false);
      state=state.setIn(["board",c,"won"],didWin.won===true?true:false);
      state=state.setIn(['turn'],didWin.won===true?state.get("turn")==="X"?"O":"X":state.get('turn'));






      return state;
    }






}

function startGame(state, turn){
  state = state.set("turn",turn);

  return state;

}


export {move, startGame};
