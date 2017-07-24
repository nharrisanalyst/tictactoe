import React from 'react';
import {connect} from 'react-redux';
import Choose from '../components/Choose';
import {Start} from '../actions/actions';




const mapStateToProps=(state)=>{
  return{
      turn: state.get('turn')
  };
}





const mapDispatchToProps =(dispatch)=>{

  return{
       handleStart:input=>{
          dispatch(Start(input))
       }
  };
}



const ChooseCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Choose)

export default ChooseCont;
