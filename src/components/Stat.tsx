import React, { useEffect, useState } from 'react';
import { Dropdown } from "./Dropdown.tsx";
import { ITEM_MODIFIER } from '../constants/Items.tsx';
import { useContext } from 'react';
import { StatContext } from '../contexts/StatContext.tsx';

/**
 * Stat screen allowing user to input items + select star level
 * @returns JSX Component
 */
export const Stat = () => {
    const [starLevel, setStarLevel] = useState(1);
    const [dropdown, setDropdown] = useState([false, false, false]);
    const [selectedItems, setSelectedItems] = useState([null, null, null]);

    const context:any = useContext(StatContext);
    const [baseAD, setBaseAD] = context.baseAD;
    const [modifierAD, setModifierAD] =  context.modifierAD;

    const handleItemClick = (index: number) => {
        setDropdown(prev => {
            return prev.map((e, i) => {
                if (i == index) {
                    return !e;
                } else {
                    return false;
                }
            });
        })
    }

    const handleDropdownClick = (name: any, index: number) => {
        setSelectedItems(prev => {
            prev[index] = name;
            const totalModifier = prev.map((name) => {
                if (name == null) {
                    return 0;
                }
                return ITEM_MODIFIER[name];
            }).reduce((acc, curr) => acc + curr, 1);
            setModifierAD(totalModifier);

            return prev;
        })
    }

    const handleLevelSelect = (event: any) => {
        if (event.target != null) {
            setStarLevel(event.target.value * 1);
            setBaseAD(60 * Math.pow(1.5, event.target.value * 1 - 1));
        }
    }

    return (<div style={{ width: '100%', display: 'flex', alignContent: 'center', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', width: 430, height: 430, flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '100%', height: '50%' }}>
                <div style={{ display: 'flex', width: '50%', height: '100%', }}>
                    <div style={{ position: 'relative', top: 40, left: '15%', display: 'flex', width: 120, height: 120}}>

                        <img className="StatBoxImage" src="./images/champion/Sivir.png"></img>
                    </div>
                </div>

                <div className='StatBox'>
                    <div style={{display: 'flex', flexDirection: 'row'}}>  Star level:
                        <form>
                            <div className="StatBoxLevel">
                                {[1, 2, 3].map((i) => {
                                    return (<div className="StatBoxLevelOption">
                                        <label>
                                            <input type="radio" value={i}
                                                checked={i === starLevel}
                                                onChange={handleLevelSelect} />
                                            {i}
                                        </label>
                                    </div>);
                                })}
                            </div>
                        </form>

                    </div>


                    <div>
                        Total AD: {Math.floor(baseAD * modifierAD)}
                    </div>

                    <div>
                        Current gold per turn: {Math.floor(baseAD * modifierAD / 42)}
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', width: '100%', height: '50%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                {dropdown.map((x, i) => {
                    return (<div className='StatItem' onClick={() => { handleItemClick(i) }}>
                        {selectedItems[i] != null ? <img className='StatItem' src={"/images/items/" + selectedItems[i] + ".png"}></img> : <img className='StatItem' src={"./images/items/empty.png"}></img>}
                        {x && <Dropdown handleOnClick={(name: any) => { return handleDropdownClick(name, i); }} />}

                    </div>)
                })}
            </div>
        </div>
    </div>)
}