import React, {useEffect, useState} from 'react';
import './App.css';
import Creature from "./Creature";

function App() {
    const allFishData = require('./fish.json');
    const [month, setMonth] = useState("all");
    const [time, setTime] = useState("all");
    const [displayedFish, setDisplayedFish] = useState(allFishData);
    useEffect(() => {
        let toDisplay = [];
        allFishData.forEach(fish => {
            if (month === 'all' || fish.months.includes(parseInt(month))) {
                if (time === 'all' || findCommonElements(toIntArray(time), fish.times)) {
                    toDisplay.push(fish)
                }
            }
        });
        setDisplayedFish(toDisplay);
    }, [month, time]);

    function toIntArray(s) {
        return s.split(',').map(e => parseInt(e))
    }

    function findCommonElements(arr1, arr2) {
        return arr1.some(item => arr2.includes(parseInt(item)));
    }

    return (
        <div>
            <div style={{ textAlign: 'center', fontSize: '4vw'}}>Critterpedia</div>
            <div style={{ textAlign: 'center', fontSize: '2vw'}}>Displaying: {displayedFish.length} Fish</div>
            <div style={{ textAlign: 'center'}}>
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
            <div id="mainContent" className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 400px)',
            }}>
                {displayedFish && displayedFish.map((fish) =>
                    <Creature key={fish.id} data={fish}/>
                )}
            </div>
        </div>
    );
}

export default App;
