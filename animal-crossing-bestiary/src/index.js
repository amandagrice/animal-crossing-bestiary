import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreatureGrid from './CreatureGrid/CreatureGrid';
import { BrowserRouter, Route } from 'react-router-dom';

function Main() {
    return(
        <BrowserRouter>
            <Route exact path='/' component={() => <div>Main</div>} />
            <Route path='/fish' component={() => <CreatureGrid type='fish' />} />
            <Route path='/bugs' component={() => <CreatureGrid type='bug'/>} />
        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))
