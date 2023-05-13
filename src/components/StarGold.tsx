import React, { useContext } from 'react';
import { StatContext } from '../contexts/StatContext';

const style = {
    width: 90,
    height: 90,
    // backgroundColor: 'black',
    borderRadius: 10,
    border: 'solid 1px black',
    display: 'flex'
}

const container = {
    display: 'flex',
    justifyContent: 'center'
}
/**
 * Displays how much gold is obtained per star level
 */
export const StarGold = () => {

    const adPerStar = [60, 90, 135]

    // Get from context
    // We care about current ad modifiers from items
    const context:any = useContext(StatContext);
    const [baseAD, setBaseAD] = context.baseAD;
    const [modifierAD, setModifierAD] =  context.modifierAD;

    // Might need to bind display to a state?

    const calculateStarGold = (starLevel: number): number => {
        let totalAd = adPerStar[starLevel - 1];
        totalAd *= modifierAD;
        const gold = Math.floor(totalAd / 42);

        return gold;
    }

    return (<div className="StarGold">
        <div className="StarGoldTitle"> <h2> Gold gained per star level </h2></div>
        <div className="StarGoldContainer">
            {[1,2,3].map((num) => {
                return <div className="StarGoldItem"> <div style={container}> <div style={style}> <img src={"./images/misc/star" + num + ".png"}></img> </div> </div>  <div style={container}> <h3> {calculateStarGold(num)} </h3> </div> </div>;
            })}
            
        </div>
    </div>)
}