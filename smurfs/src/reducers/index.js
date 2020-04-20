import {GET_DATA, UPDATE_SMURFS} from "../actions"
// Create an initial state
export const initialState = {
    isLoading:false,
    smurfs:[]
}
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA :
            return {
                ...state,
                isLoading:true
            }
        
        case UPDATE_SMURFS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        default:
            return {
                state
            }
        
            
    }
}