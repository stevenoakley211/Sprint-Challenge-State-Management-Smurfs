import axios from 'axios';
export const GET_DATA ="GET_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS"

export const getSmurfs = () => {
    return dispatch =>{
        dispatch({type:"GET_DATA"});
        axios
            .get('http://localhost:3333/smurfs')
            .then( res =>{
                dispatch({type:"UPDATE_SMURFS", payload:res.data})
            })
    }
}