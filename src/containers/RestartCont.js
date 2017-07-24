import React from 'react';
import {connect} from 'react-redux';
import {doRestart} from '../actions/actions';
import RestartButton from '../components/RestartButton';


const mapStateToProps =(state)=>{
  return{
     turn: state.get('turn')
  };


}

const mapDispatchToProps =(dispatch)=>{
  return{
     handleRestart:()=>{
       dispatch(doRestart())
      }
    }
}



const RestartCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestartButton)


export default RestartCont;
