

export const initialState ={
    isLoading: false,
    smurfs:[]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_DATA":
            console.log(state)
            return {
                ...state,
                isLoading: true
            };
        case "UPDATE_SMURFS":
            console.log(state)
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };
        case "ADD_SMURF":
            return {
                ...state, smurfs:[...state, action.payload]
            }
        default: 
            return state;
    }
}
export const submitSmurf = newSmurf => {
    return dispatch =>{
        dispatch({type:"ADD_SMURF", payload:newSmurf})
    }
}