import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FishPage from './FishPage/FishPage';
import { BrowserRouter, Route } from 'react-router-dom';
import BugPage from "./BugPage/BugPage";

function Main() {
    return(
        <BrowserRouter>
            <Route exact path='/' component={() => <div>Main</div>} />
            <Route path='/fish' component={() => <FishPage />} />
            <Route path='/bugs' component={() => <BugPage />} />
        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'))
