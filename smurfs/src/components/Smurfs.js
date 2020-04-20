import React from 'react' 
import {connect} from 'react-redux';
import { getSmurfs }from '../actions'
const Smurfs = props => {
    
    return (
        <div>
            {console.log(props)}
            <button onClick={()=>props.getSmurfs()}>Load Smurfs</button>

          {
            props.smurfs && !props.isLoading && props.smurfs.map(e => {
            return (
                <div key={e.id}>
                    <h2>{e.name}</h2>
                    <p>Age: {e.age}</p>
                    <p>Height: {e.height}</p>
                </div>
              )
            })
            }
        </div>
        
    )
}
const mapStateToProps = state => {
    return {
      smurfs:state.smurfs,
      isLoading: state.isLoading
    }
  }
  
  export default connect(()=>mapStateToProps,{
    getSmurfs})(Smurfs);
  