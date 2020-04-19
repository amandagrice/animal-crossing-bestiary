import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreatureGrid from './CreatureGrid/CreatureGrid';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Main() {
    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <BrowserRouter>
            <Route render={({ history }) => (
                <div>
                    <img id='menu-icon' onClick={e => setAnchorEl(e.currentTarget)} src={process.env.PUBLIC_URL + '/menu.png'}  alt='' />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem value='fish' onClick={() => history.push('/fish')}>Fish</MenuItem>
                        <MenuItem value='bugs' onClick={() => history.push('/bugs')}>Bugs</MenuItem>
                    </Menu>
                </div>
            )} />
            <Route exact path='/' component={() => <CreatureGrid type='fish'/>}/>
            <Route path='/fish' component={() => <CreatureGrid type='fish'/>}/>
            <Route path='/bugs' component={() => <CreatureGrid type='bug'/>}/>
        </BrowserRouter>
    )
}

ReactDOM.render(<Main/>, document.getElementById('root'))
