import React from 'react';
import './checklist.css';

function Checklist() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Daily Checklist</h1>

            <div className="daily-checklist">
                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Check Shops</div>
                    <span>
                        <input className="daily-checklist-checkbox" type="checkbox"/>
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/able_sisters.png'}
                            alt="Able Sister's Shop"
                            style={{height: '150px', verticalAlign: 'top', marginLeft: '30px'}}
                        />
                    </span>

                    <span style={{ marginLeft: '30px'}}>
                        <input className="daily-checklist-checkbox" type="checkbox"/>
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
                        <input className="daily-checklist-checkbox" type="checkbox"/>
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/turnip.png'}
                            alt="Turnip"
                            style={{height: '150px', verticalAlign: 'top' }}
                        />
                    </span>

                    <span style={{ marginLeft: '30px'}}>
                        <input className="daily-checklist-checkbox" type="checkbox"/>
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
                        <span id={'fossil_' + index}>
                        <input className="daily-checklist-checkbox" type="checkbox"/>
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
                        <input className="daily-checklist-checkbox" type="checkbox"/>
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/nook_stop.png'}
                            alt="Nook Stop"
                            style={{height: '150px', verticalAlign: 'top', marginLeft: '20px'}}
                        />
                    </span>

                    <span style={{ marginLeft: '30px'}}>
                        <input className="daily-checklist-checkbox" type="checkbox"/>
                        <img
                            src={process.env.PUBLIC_URL + '/checklist_images/recycle_bin.png'}
                            alt="Recycle Bin"
                            style={{height: '150px', verticalAlign: 'top'}}
                        />
                    </span>
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Find Beach Crafting Recipe</div>
                    <input className="daily-checklist-checkbox" type="checkbox"/>
                    <img
                        src={process.env.PUBLIC_URL + '/checklist_images/crafting_recipe.png'}
                        alt="Beach Crafting Recipe"
                        style={{height: '150px', verticalAlign: 'top'}}
                    />
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Find Money Tree Spot</div>
                    <input className="daily-checklist-checkbox" type="checkbox"/>
                    <img
                        src={process.env.PUBLIC_URL + '/checklist_images/money_tree.png'}
                        alt="Money Tree Spot"
                        style={{height: '150px', verticalAlign: 'top'}}
                    />
                </div>

                <div style={{marginTop: '25px'}}>
                    <div style={{fontSize: '35px'}}>Talk to All Villagers</div>
                    <input className="daily-checklist-checkbox" type="checkbox"/>
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