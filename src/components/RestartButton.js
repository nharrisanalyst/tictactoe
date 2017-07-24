import React from 'react';


const RestartButton = ({turn,handleRestart})=>{
  if(turn===""){ return null}
  return(
  <div id = "restartButton">
  <button onClick={handleRestart} style={{color:'blue'}}>Restart Game</button>
  </div>
)
}


export default RestartButton;
