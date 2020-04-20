import React,{useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import { getSmurfs }from '../actions' 
const Form = props => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height:"",
      });
    const handleSubmit = (values) => {
        console.log("Submitting...", values)
        axios.post("http://localhost:3333/smurfs", values)
        .then(response => {
            console.log(response)
            props.getSmurfs(values)
            console.log("state",props.smurfs)
        })
        .catch(error => console.log(error.response))
        console.log('vaules',values)
    }

   
    const handleChanges= e =>{
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
          });
    }
    const addNewSmurf = smu => {
        const newSmurf = {
            id: Date.now(),
            name: smu.name,
            age: smu.age,
            height: smu.height
        }
        handleSubmit(newSmurf)
    }

    const submitForm = e=> {
        e.preventDefault()
        addNewSmurf(smurf)
    }
    
    
    
    console.log(smurf)

    return (
        <form onSubmit={submitForm}>
          <label htmlFor="Name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleChanges}
            name="name"
            value={smurf.name}
          />
          <label htmlFor="Age">Age</label>
           <input
            id="age"
            type="text"
            placeholder="age"
            onChange={handleChanges}
            name="age"
            value={smurf.age}
          />
          <label htmlFor="height">Height</label>
           <input
            id="height"
            type="text"
            placeholder="height"
            onChange={handleChanges}
            name="height"
            value={smurf.height}
          />
          <button type="submit">Add Smurf</button>
        </form>
      );
}
const mapStateToProps = state => {
    return {
      smurfs:state.smurfs,
      isLoading: state.isLoading
    }
  }
  
  export default connect(()=>mapStateToProps,{
    getSmurfs})(Form);
  