import React from 'react'

function Creature(props) {
    return(
        <div style={{backgroundColor: 'lightgray', height: '250px', width: '250px', marginLeft: '50px', marginBottom: '50px', marginTop: '50px'}}>
            <div className="creature-name" style={{fontSize: '30px', textAlign: 'center'}}>{props.data.name}</div>
            <img src={props.data.name + '.png'} style={{width: '250px'}} />
            <br />
        </div>
    )
}

export default Creature