import React, {useEffect, useState} from 'react';
import Creature from "../Creature/Creature";

function CreatureGrid(props) {
    const allFishData = require('./fish.json');
    const allBugData = require('./bugs.json');
    const [month, setMonth] = useState("all");
    const [time, setTime] = useState("all");
    const [displayedCreatures, setDisplayedCreatures] = useState(props.type === 'fish' ? allFishData : allBugData);
    useEffect(() => {
        let toDisplay = [];
        if (props.type === 'fish') {
            allFishData.forEach(fish => {
                if (month === 'all' || fish.months.includes(parseInt(month))) {
                    if (time === 'all' || findCommonElements(toIntArray(time), fish.times)) {
                        toDisplay.push(fish)
                    }
                }
            });
        } else {
            allBugData.forEach(bug => {
                if (month === 'all' || bug.months.includes(parseInt(month))) {
                    if (time === 'all' || findCommonElements(toIntArray(time), bug.times)) {
                        toDisplay.push(bug)
                    }
                }
            });
        }
        setDisplayedCreatures(toDisplay);
    }, [month, time]);

    function toIntArray(s) {
        return s.split(',').map(e => parseInt(e))
    }

    function findCommonElements(arr1, arr2) {
        return arr1.some(item => arr2.includes(parseInt(item)));
    }

    function getCaughtArr() {
        if (props.type === 'fish') {
            return localStorage.getItem('caught-fish');
        } else {
            return localStorage.getItem('caught-bugs');
        }
    }

    function setCaughtArr(arr) {
        if (props.type === 'fish') {
            localStorage.setItem('caught-fish', arr);
        } else {
            localStorage.setItem('caught-bugs', arr);
        }
    }

    function toggleCreatureCheckbox(e) {
        let caughtArr = getCaughtArr();
        if (caughtArr) {
            caughtArr = JSON.parse(caughtArr);
        } else {
            caughtArr = new Array(80).fill(0);
        }
        caughtArr[e.target.id - 1] = +(e.target.checked);
        setCaughtArr(JSON.stringify(caughtArr));
    }

    return (
        <div>
            <div style={{textAlign: 'center', fontSize: '4vw'}}>Critterpedia</div>
            <div style={{textAlign: 'center', fontSize: '2vw'}}>Displaying: {displayedCreatures.length} of 80</div>
            <div style={{textAlign: 'center'}}>
                <label htmlFor="month-dropdown">Month:</label>
                <select
                    id="month-dropdown"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}>
                    <option value="all">All</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <br/>
                <div style={{display: props.type === 'bug' ? 'none' : ''}}>
                    <label htmlFor="time-dropdown">Time:</label>
                    <select
                        id="time-dropdown"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}>
                        <option value="all">All</option>
                        <option value="4, 5, 6, 7, 8, 9">Super Early (4AM to 9AM)</option>
                        <option value="9, 10, 11, 12, 13, 14, 15, 16">Day (9AM to 4PM)</option>
                        <option value="16, 17, 18, 19, 20, 21">Evening (4PM to 9PM)</option>
                        <option value="1, 2, 3, 4, 21, 22, 23, 24">Super Late (9PM to 4am)</option>
                    </select>
                </div>
            </div>
            <div id="mainContent" className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 400px)',
            }}>
                {displayedCreatures && displayedCreatures.map((creature) =>
                    <Creature key={creature.id} type={props.type} data={creature} onCheck={toggleCreatureCheckbox} />
                )}
            </div>
        </div>
    );
}

export default CreatureGrid;
