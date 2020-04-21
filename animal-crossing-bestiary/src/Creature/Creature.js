import React from 'react';
import './creature.css';

function Creature(props) {

    return (
        <div className='creature-div'>
            <div className='creature-number'>No. {props.data.id}</div>
            <br/>
            <div className='creature-name'>{props.data.name}</div>
            <div className='creature-image-holder'>
                <img
                    style={{display: props.type !== 'fish' ? 'none' : ''}}
                    className='creature-image'
                    src={process.env.PUBLIC_URL + '/fish/' + props.data.name.replace(/ /g, '_') + '.png'}
                    alt=''/>
                <img
                    style={{display: props.type !== 'bug' ? 'none' : ''}}
                    className='creature-image'
                    src={process.env.PUBLIC_URL + '/bugs/' + props.data.name.replace(/ /g, '_') + '.png'}
                    alt=''/>
            </div>
            <div style={{fontSize: '15px', position: 'absolute', bottom: -5, left: 10, lineHeight: '15px'}}>
                <p><strong>Months:</strong> {props.data.monthsString}</p>
                <p><strong>Times:</strong> {props.data.timeString}</p>
                <p><strong>Location:</strong> {props.data.location}</p>
                <p><strong>Value:</strong> {props.data.value}</p>
                <p style={{display: props.type !== 'fish' ? 'none' : ''}}>
                    <strong>Shadow Size: </strong>{props.data.shadow}
                </p>
            </div>
            <input
                id={props.data.id}
                className='creature-checkbox'
                type="checkbox"
                onChange={props.onCheck}
                checked={props.isCaught}
            />
            <br/>
        </div>
    )
}

export default Creature