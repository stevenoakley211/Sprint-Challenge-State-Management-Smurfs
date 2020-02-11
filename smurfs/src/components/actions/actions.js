import axios from 'axios';
export const getState = () => {
    return dispatch => {
   dispatch({type: "GET_DATA"});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>{
            console.log('server res',res)
            dispatch({type : "UPDATE_SMURFS", payload: res.data})
        })
}
}

export const submitSmurf = newSmurf => {
    return dispatch => {
      dispatch({ type:"ADD_SMURF", payload:newSmurf})
    }
  }