import React, {useEffect, useState} from 'react';
import './App.css';
import Creature from "./Creature";

function App() {
    const [month, setMonth] = useState("all")
    const [time, setTime] = useState("all")
    const [includeFish, setIncludeFish] = useState(true)
    const [includeBugs, setIncludeBugs] = useState(true)
    const [creatureData, setCreatureData] = useState(null)
    useEffect(() => {
        // fake for now
        console.log("calling api...")
        console.log("parameters: " + month + ' ' + time + ' ' + includeFish + ' ' + includeBugs)
        setCreatureData(
            [
                {
                    id: 1,
                    type: 'Fish',
                    name: "Anchovy",
                    price: 200,
                    shadow: 2,
                    location: "Ocean",
                    timeStart: 4,
                    timeEnd: 21,
                    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                },
                {
                    id: 2,
                    type: 'Bug',
                    name: "Emperor Butterfly",
                    price: 4000,
                    location: "Flying",
                    timeStart: 17,
                    timeEnd: 8,
                    months: [1, 2, 3, 6, 7, 8, 9, 12]
                }
            ])
    }, [month, time, includeBugs, includeFish]);

    return (
        <div>
            <h2>Animal Crossing Bestiary</h2>

            <label htmlFor="fish-checkbox">Fish</label>
            <input type="checkbox" id="fish-checkbox" name="fish-checkbox" checked={includeFish}
                   onChange={(e) => setIncludeFish(e.target.checked)}/>

            <label htmlFor="bug-checkbox">Bugs</label>
            <input type="checkbox" id="bug-checkbox" name="bug-checkbox" checked={includeBugs}
                   onChange={(e) => setIncludeBugs(e.target.checked)}/>
            <br/>
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
                <option value="day">Day (9AM - 4PM)</option>
                <option value="night">Night (4PM - 9AM)</option>
            </select>
            <div id="mainContent" className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 300px)',
            }}>
                {creatureData && creatureData.map((creature) =>
                    <Creature key={creature.id} data={creature}/>
                )}
            </div>
        </div>
    );
}

export default App;
