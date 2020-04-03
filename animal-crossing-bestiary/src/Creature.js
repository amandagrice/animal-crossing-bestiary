import React from 'react'

function Creature(props) {
    return(
        <div style={{backgroundColor: 'green', height: '250px', width: '250px', marginLeft: '10px', marginBottom: '50px', marginTop: '50px'}}>
            <div className="creature-name">{props.data.name}</div>
            <br />
            <div className="creature-type">{props.data.type}</div>
        </div>
    )
}

export default Creature