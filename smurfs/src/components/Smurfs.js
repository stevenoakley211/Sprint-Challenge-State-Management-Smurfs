import React from 'react' 

const Smurfs = props => {
    
    return (
        <div>
            {console.log(props)}
            <button onClick={props.fetchState}>Load Smurfs</button>

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
export default Smurfs;