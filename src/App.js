import React from 'react';
import './App.css';
import BoardGameCont from './containers/BoardGame_Cont';
import RestartCont from './containers/RestartCont';
import ChooseCont from './containers/ChooseCont';
const App =(props)=>(
    <div id="mainGame">
    <h3> Welcome to Tic Tac Toe Enjoy</h3>
   <ChooseCont />
   <div className="BoardGame">
    <BoardGameCont />
    <RestartCont />
   </div>
   </div>


)

export default App;
