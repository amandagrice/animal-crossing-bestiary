import React from 'react';
import './checklist.css';

function Checklist () {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Daily Checklist</h1>
            <div className="daily-checklist">
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Talk to all Villagers </label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Access Nook Stop </label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Check Recycle Bin </label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Pick Up Message Bottle on the Beach</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Find the Money Rock</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Plant a Money Tree</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Dig Up 4 Fossils</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Check Able Sister's for Cool Items</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Check Nook's Cranny for Cool Items</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Check Turnip Prices Before Noon</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Check Turnip Prices After Noon</label><br/>
                <label><input className="daily-checklist-checkbox" type="checkbox" /> Check For Island Events</label><br/>
            </div>
        </div>
    )
}

export default Checklist;