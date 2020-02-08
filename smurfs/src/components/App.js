import React from "react";
import "./App.css";
import {connect} from 'react-redux'
import Form from './SmurfForm'
import Smurfs from './Smurfs'
import {getState} from './actions/actions'
const App =(props) => {
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs isLoading={props.isLoading}fetchState={props.getState}smurfs={props.smurfs}/>
        <Form fetchState={getState}/>
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
    smurfs:state.smurfs,
    isLoading: state.isLoading
  }
}

export default connect(()=>mapStateToProps,{
  getState})(App);
