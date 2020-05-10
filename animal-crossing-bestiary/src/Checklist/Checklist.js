import React, {useState} from 'react';
import './checklist.css';

function Checklist() {
    const [ableSisters, setAbleSisters] = useState(localStorage.getItem('ableSisters') === 'true');
    const [nooksCranny, setNooksCranny] = useState(localStorage.getItem('nooksCranny') === 'true');
    const [turnipAM, setTurnipAM] = useState(localStorage.getItem('turnipAM') === 'true');
    const [turnipPM, setTurnipPM] = useState(localStorage.getItem('turnipPM') === 'true');
    const [fossils, setFossils] = useState(JSON.parse(localStorage.getItem('fossils')) || [false, false, false, false]);
    const [nookStop, setNookStop] = useState(localStorage.getItem('nookStop') === 'true');
    const [recyclingBin, setRecyclingBin] = useState(localStorage.getItem('recyclingBin') === 'true');
    const [beachCraftingRecipe, setBeachCraftingRecipe] = useState(localStorage.getItem('beachCraftingRecipe') === 'true');
    const [moneyTreeSpot, setMoneyTreeSpot] = useState(localStorage.getItem('moneyTreeSpot') === 'true');
    const [villagers, setVillagers] = useState(localStorage.getItem('villagers') === 'true');

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Daily Checklist</h1>

            <div className="daily-checklist">
                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Check Shops</div>
                    <span>
                        <input
                            className="daily-checklist-checkbox"
                            type="checkbox"
                            checked={ableSisters}
                            onChange={e => {
                                setAbleSisters(e.target.checked);
                                localStorage.setItem('ableSisters', e.target.checked.toString());
                            }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/able_sisters.png'}
                            alt="Able Sister's Shop"
                            style={{height: '150px', verticalAlign: 'top', marginLeft: '30px'}}
                        />
                    </span>

                    <span style={{ marginLeft: '30px'}}>
                        <input
                            className="daily-checklist-checkbox"
                            type="checkbox"
                            checked={nooksCranny}
                            onChange={e => {
                                setNooksCranny(e.target.checked);
                                localStorage.setItem('nooksCranny', e.target.checked.toString());
                            }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/nooks_cranny.png'}
                            alt="Nook's Cranny"
                            style={{height: '150px', verticalAlign: 'top'}}
                        />
                    </span>
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Check Turnip Prices</div>
                    <span>
                        <input
                            className="daily-checklist-checkbox"
                            type="checkbox"
                            checked={turnipAM}
                            onChange={e => {
                                setTurnipAM(e.target.checked);
                                localStorage.setItem('turnipAM', e.target.checked.toString());
                            }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/turnip.png'}
                            alt="Turnip"
                            style={{height: '150px', verticalAlign: 'top' }}
                        />
                    </span>

                    <span style={{ marginLeft: '30px'}}>
                        <input
                            className="daily-checklist-checkbox"
                            type="checkbox"
                            checked={turnipPM}
                            onChange={e => {
                                setTurnipPM(e.target.checked);
                                localStorage.setItem('turnipPM', e.target.checked.toString());
                            }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/turnip.png'}
                            alt="Turnip"
                            style={{height: '150px', verticalAlign: 'top'}}
                        />
                    </span>
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Find Fossils</div>
                    {Array.from({length: 4}, (value, index) =>
                        <span id={'fossil_' + index} key={'fossil_' + index}>
                            <input
                                className="daily-checklist-checkbox"
                                type="checkbox"
                                checked={fossils[index]}
                                onChange={e => {
                                    let fossilArr = fossils.slice();
                                    fossilArr[index] = e.target.checked;
                                    setFossils(fossilArr);
                                    localStorage.setItem('fossils', JSON.stringify(fossilArr));
                                }}
                            />
                            {fossils}
                            <img
                                src={process.env.PUBLIC_URL + '/checklist_images/fossil.png'}
                                alt='Fossil'
                                style={{height: '150px', verticalAlign: 'top'}}
                            />
                        </span>)}
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Visit Town Hall</div>
                    <span>
                        <input
                            className="daily-checklist-checkbox"
                            type="checkbox"
                            checked={nookStop}
                            onChange={e => {
                                setNookStop(e.target.checked);
                                localStorage.setItem('nookStop', e.target.checked.toString());
                            }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/nook_stop.png'}
                            alt="Nook Stop"
                            style={{height: '150px', verticalAlign: 'top', marginLeft: '20px'}}
                        />
                    </span>

                    <span style={{ marginLeft: '30px'}}>
                        <input
                            className="daily-checklist-checkbox"
                            type="checkbox"
                            checked={recyclingBin}
                            onChange={e => {
                                setRecyclingBin(e.target.checked);
                                localStorage.setItem('recyclingBin', e.target.checked.toString());
                            }}
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/recycle_bin.png'}
                            alt="Recycle Bin"
                            style={{height: '150px', verticalAlign: 'top'}}
                        />
                    </span>
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Find Beach Crafting Recipe</div>
                    <input
                        className="daily-checklist-checkbox"
                        type="checkbox"
                        checked={beachCraftingRecipe}
                        onChange={e => {
                            setBeachCraftingRecipe(e.target.checked);
                            localStorage.setItem('beachCraftingRecipe', e.target.checked.toString());
                        }}
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/checklist_images/crafting_recipe.png'}
                        alt="Beach Crafting Recipe"
                        style={{height: '150px', verticalAlign: 'top'}}
                    />
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Find Money Tree Spot</div>
                    <input
                        className="daily-checklist-checkbox"
                        type="checkbox"
                        checked={moneyTreeSpot}
                        onChange={e => {
                            setMoneyTreeSpot(e.target.checked);
                            localStorage.setItem('moneyTreeSpot', e.target.checked.toString());
                        }}
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/checklist_images/money_tree.png'}
                        alt="Money Tree Spot"
                        style={{height: '150px', verticalAlign: 'top'}}
                    />
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Talk to All Villagers</div>
                    <input
                        className="daily-checklist-checkbox"
                        type="checkbox"
                        checked={villagers}
                        onChange={e => {
                            setVillagers(e.target.checked);
                            localStorage.setItem('villagers', e.target.checked.toString());
                        }}
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/checklist_images/goldie.png'}
                        alt="Talk to All Villagers"
                        style={{height: '150px', verticalAlign: 'top'}}
                    />
                </div>

            </div>
        </div>
    )
}

export default Checklist;