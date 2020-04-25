import React from 'react';

function Equation(props) {
    return (
        <div>
            <Flower type={props.type} color={props.colorOne}/>
            <Plus/>
            <Flower type={props.type} color={props.colorTwo}/>
            <Equals/>
            <Flower type={props.type} color={props.result}/>
        </div>
    )
}

function Flower(props) {
    const imagePath = process.env.PUBLIC_URL + '/flowers/' + props.type + '_' + props.color + '.png';
    return (<img src={imagePath} alt='' />)
}

function Plus() {
    return (<span style={{fontSize: '150px'}}>+</span>)
}

function Equals() {
    return (<span style={{fontSize: '150px'}}>=</span>)
}

function FlowerGuide() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Flowers</h1>
            <div style={{textAlign: 'center'}}>
                <h2>Lilies</h2>
                <Equation type='lily' colorOne='red' colorTwo='red' result='black'/>
                <Equation type='lily' colorOne='red' colorTwo='yellow' result='orange'/>
                <Equation type='lily' colorOne='red' colorTwo='white' result='pink'/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Tulips</h2>
                <Equation type='tulip' colorOne='red' colorTwo='yellow' result='orange'/>
                <Equation type='tulip' colorOne='red' colorTwo='red' result='black'/>
                <Equation type='tulip' colorOne='red' colorTwo='white' result='pink'/>
                <Equation type='tulip' colorOne='orange' colorTwo='orange' result='purple'/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Pansies</h2>
                <Equation type='pansy' colorOne='white' colorTwo='white' result='blue'/>
                <Equation type='pansy' colorOne='red' colorTwo='yellow' result='orange'/>
                <Equation type='pansy' colorOne='blue' colorTwo='blue' result='purple'/>
                <Equation type='pansy' colorOne='red' colorTwo='red' result='purple'/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Windflower</h2>
                <Equation type='windflower' colorOne='red' colorTwo='orange' result='pink'/>
                <Equation type='windflower' colorOne='orange' colorTwo='white' result='blue'/>
                <Equation type='windflower' colorOne='white' colorTwo='white' result='blue'/>
                <Equation type='windflower' colorOne='blue' colorTwo='pink' result='purple'/>
                <Equation type='windflower' colorOne='blue' colorTwo='blue' result='purple'/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Cosmos</h2>
                <Equation type='cosmo' colorOne='red' colorTwo='yellow' result='orange'/>
                <Equation type='cosmo' colorOne='red' colorTwo='white' result='pink'/>
                <Equation type='cosmo' colorOne='red' colorTwo='red' result='black'/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Hyacinth</h2>
                <Equation type='hyacinth' colorOne='red' colorTwo='yellow' result='orange'/>
                <Equation type='hyacinth' colorOne='white' colorTwo='red' result='pink' />
                <Equation type='hyacinth' colorOne='white' colorTwo='white' result='blue' />
                <Equation type='hyacinth' colorOne='blue' colorTwo='blue' result='purple' />
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Mums</h2>
                <Equation type='mum' colorOne='red' colorTwo='white' result='pink'/>
                <Equation type='mum' colorOne='white' colorTwo='white' result='purple'/>
                <Equation type='mum' colorOne='purple' colorTwo='purple' result='green'/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h2>Roses</h2>
                <Equation type='rose' colorOne='red' colorTwo='white' result='pink'/>
                <Equation type='rose' colorOne='red' colorTwo='yellow' result='orange'/>
                <Equation type='rose' colorOne='white' colorTwo='white' result='purple'/>
                <Equation type='rose' colorOne='red' colorTwo='red' result='black'/>
                <Equation type='rose' colorOne='orange' colorTwo='orange' result='blue'/>
            </div>
        </div>
    )
}

export default FlowerGuide;