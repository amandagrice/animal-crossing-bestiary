import React, {useEffect, useState} from 'react';
import Creature from "../Creature/Creature";

function CreatureGrid(props) {
    const allFishData = require('./fish.json');
    const allBugData = require('./bugs.json');
    const [month, setMonth] = useState("all");
    const [time, setTime] = useState("all");
    const [location, setLocation] = useState("all");
    const [displayedCreatures, setDisplayedCreatures] = useState(props.type === 'fish' ? allFishData : allBugData);
    const [caughtCreatures, setCaughtCreatures] = useState(JSON.parse(getCaughtArr()) || new Array(80).fill(0));
    const fishLocations = ["River", "Pond", "Sea", "Pier"];
    const bugLocations = ["Flowers", "Flying", "Near Lights", "Trees", "In Grass", "Water", "Stumps", "Ground", "Rotten", "Beach", "Villagers", "Rocks"];
    useEffect(() => {
        let toDisplay = [];
        if (props.type === 'fish') {
            allFishData.forEach(fish => {
                if (month === 'all' || fish.months.includes(parseInt(month))) {
                    if (time === 'all' || findCommonElements(toIntArray(time), fish.times)) {
                        if (location === 'all' || fish.location.toLowerCase().includes(location)) {
                            toDisplay.push(fish)
                        }
                    }
                }
            });
        } else {
            allBugData.forEach(bug => {
                if (month === 'all' || bug.months.includes(parseInt(month))) {
                    if (time === 'all' || findCommonElements(toIntArray(time), bug.times)) {
                        if (location === 'all' || bug.location.toLowerCase().includes(location)) {
                            toDisplay.push(bug)
                        }
                    }
                }
            });
        }
        setDisplayedCreatures(toDisplay);
    }, [month, time, location]);

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
            setCaughtCreatures(arr);
            localStorage.setItem('caught-fish', JSON.stringify(arr));
        } else {
            setCaughtCreatures(arr);
            localStorage.setItem('caught-bugs', JSON.stringify(arr));
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
        setCaughtArr(caughtArr);
    }

    return (
        <div>
            <div style={{textAlign: 'center', fontSize: '4vw'}}>Critterpedia</div>
            <div style={{textAlign: 'center', fontSize: '2vw'}}>Displaying: {displayedCreatures.length} of 80</div>
            <div style={{textAlign: 'center'}}>
                <label htmlFor="month-dropdown">Month: </label>
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
                <label htmlFor="time-dropdown">Time: </label>
                <select
                    id="time-dropdown"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}>
                    <option value="all">All</option>
                    <option value="4, 5, 6, 7, 8">Super Early (4AM to 9AM)</option>
                    <option value="9, 10, 11, 12, 13, 14, 15">Day (9AM to 4PM)</option>
                    <option value="16, 17, 18, 19, 20">Evening (4PM to 9PM)</option>
                    <option value="1, 2, 3, 21, 22, 23, 24">Super Late (9PM to 4AM)</option>
                    {[...Array(24).keys()].map((hour) =>
                        <option value={hour + 1}>{(hour + 1).toString() + ':00'}</option>
                    )}
                </select>
                <div>
                    <label htmlFor="location-dropdown">Location: </label>
                    <select
                        id="location-dropdown"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}>
                        <option value="all">All</option>
                        {props.type === "bug" && bugLocations.map((location) =>
                            <option value={location.toLowerCase()}>{location}</option>
                        )}
                        {props.type === "fish" && fishLocations.map((location) =>
                            <option value={location.toLowerCase()}>{location}</option>
                        )}
                    </select>
                </div>
            </div>
            <div id="mainContent" className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 400px)',
            }}>
                {displayedCreatures && displayedCreatures.map((creature) =>
                    <Creature key={creature.id} type={props.type} data={creature} isCaught={!!caughtCreatures[creature.id - 1]} onCheck={toggleCreatureCheckbox} />
                )}
            </div>
        </div>
    );
}

export default CreatureGrid;
