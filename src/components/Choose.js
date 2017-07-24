import React from 'react';
import PropTypes from 'prop-types';



const Choose = ({turn,handleStart})=>{
  if(turn==="X"||turn ==="O"){return null}

  return(
  <div id ="choose">
   <h3>Who goes first? X or O?</h3>
   <button className="chooseButton" onClick={()=>handleStart('X')} >X</button><button className="chooseButton" onClick={()=>handleStart('O')} >O</button>
  </div>

)
}


export default Choose;
