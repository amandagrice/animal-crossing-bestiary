import React from 'react';
import './creature.css';

function Creature(props) {
    return(
        <div style={{backgroundColor: '#dedede', height: '300px', width: '300px', marginLeft: '100px', marginBottom: '30px', marginTop: '30px', position: 'relative', borderRadius: '10%', border: '2px solid black'}}>
            <div style={{position: 'absolute', top: 10, left: 15}}>{props.data.id}</div>
            <div className="creature-name" style={{fontSize: '25px', textAlign: 'right', marginRight: '15px'}}>{props.data.name}</div>
            <img src={'./fish/' + props.data.name.replace(/ /g, '_') + '.png'} style={{maxWidth: '250px', maxHeight: '200px'}} alt='' />
            <div style={{fontSize: '17px', position: 'absolute', bottom: 10, left: 10}}>
                <strong>Months:</strong> placeholder <br />
                <strong>Times:</strong> placeholder <br />
                <strong>Location:</strong> {props.data.location} <br/>
                <strong>Value:</strong> {props.data.value} <br/>
                <strong>Shadow Size:</strong> {props.data.shadow} <br/>
            </div>
            <input style={{position: 'absolute', bottom: 10, right: 10}} type="checkbox" id={'caught+' + props.data} />
            <br />
        </div>
    )
}

export default Creature