import React, { Component } from "react";
import {connect} from 'react-redux';
import {getSmurfs}from '../actions'
import Form from './SmurfForm';
import Smurfs from './Smurfs'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs />
        <Form />
      </div>
    );
  }
}

export default (App);
