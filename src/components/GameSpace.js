import React from 'react';
// import PropTypes from 'prop-types';


const GameSpace =({won, text,onClick,color , key, idName })=>(
  <div id = {idName} key={key} className='gameSpace' onClick={onClick} style={{backgroundColor: color?'lightblue':'white',width:100,height:100}}>
    {text}
  </div>

)



export default GameSpace;
