import React, { useContext } from "react";
import { ITEM_NAMES, ITEM_TYPE, ITEM_MODIFIER } from "../constants/Items";
import { StatContext } from "../contexts/StatContext";




/**
 * Displays which items would push us to next gold interval
 * @returns 
 */
export const ItemGold = () => {
    const data = ITEM_TYPE;

    const context:any = useContext(StatContext);
    const [baseAD, setBaseAD] = context.baseAD;
    const [modifierAD, setModifierAD] =  context.modifierAD;

    // Go through list of items and highlight ones that are fine
    const checkItemIncrements = (item: any): boolean => {

        const gold = Math.floor(baseAD * modifierAD / 42);
        const aim = (gold + 1) * 42;
        return (baseAD * (modifierAD + ITEM_MODIFIER[item as keyof typeof ITEM_MODIFIER]) >= aim);
    }

    // Re-render each time either base-ad or base modifier changes
    return (<div className="ItemGold">
        <div className="ItemGoldTitle"> <h2> Items to reach next interval </h2></div>
        <div className="ItemGoldContainer">
            {data.map(row => (<div className="ItemGoldRow">
                <div style={{ width: 100 }}> {row.name} </div>
                {row.items.map(x => <div className="ItemGoldItem">
                    <img style={checkItemIncrements(x) ? {borderRadius: 5} : { borderRadius: 5, filter: 'grayscale(100%)' }} src={"/images/items/" + x + ".png"}></img>
                </div>)}
            </div>))}
        </div>
    </div>)
}