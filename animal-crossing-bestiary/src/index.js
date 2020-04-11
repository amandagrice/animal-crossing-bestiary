import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

function Main() {
    return(
        <BrowserRouter>
            <Route exact path='/' component={() => <div>Main</div>} />
            <Route path='/fish' component={() => <App />} />
            <Route path='/bugs' component={() => <div>Bugs</div>} />
        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))
