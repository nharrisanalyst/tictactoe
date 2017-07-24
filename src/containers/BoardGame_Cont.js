import React from 'react';

import GameBoard from '../components/GameBoard';
import {connect} from 'react-redux';
import {executeMove} from '../actions/actions';


const mapStateToProps=(state)=>{

return{
  turn: state.get('turn'),
  winner: state.get('winner'),
  board : state.get('board')
};
}

const mapDispatchToProps =(dispatch)=>{
  return{
     playClick: index=>{
      
       dispatch(executeMove(index))
     }
   }
}


const BoardGameCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)


export default BoardGameCont;
