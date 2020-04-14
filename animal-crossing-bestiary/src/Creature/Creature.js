import React from 'react';
import './creature.css';

function Creature(props) {
    return(
        <div className='creature-div'>
            <div className='creature-number'>No. {props.data.id}</div><br/>
            <div className='creature-name'>{props.data.name}</div>
            <div className='creature-image-holder'>
                <img
                    style={{display: props.type !== 'fish' ? 'none' : ''}}
                    className='creature-image'
                    src={process.env.PUBLIC_URL + '/fish/' + props.data.name.replace(/ /g, '_') + '.png'}
                    alt='' />
                <img
                    style={{display: props.type !== 'bug' ? 'none' : ''}}
                    className='creature-image'
                    src={process.env.PUBLIC_URL + '/bugs/' + props.data.name.replace(/ /g, '_') + '.png'}
                    alt='' />
            </div>
            <div style={{fontSize: '17px', position: 'absolute', bottom: 10, left: 10}}>
                <strong>Months:</strong> placeholder <br />
                <strong>Times:</strong> placeholder <br />
                <strong>Location:</strong> {props.data.location} <br/>
                <strong>Value:</strong> {props.data.value} <br/>
                <div style={{display: props.type !== 'fish' ? 'none' : ''}}><strong>Shadow Size: </strong>{props.data.shadow} <br/></div>
            </div>
            <input id={'caught_' + props.data.id} className='creature-checkbox' type="checkbox" />
            <br />
        </div>
    )
}

export default Creature