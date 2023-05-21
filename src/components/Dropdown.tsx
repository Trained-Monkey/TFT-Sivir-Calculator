import { ITEM_SELECTABLE } from '../constants/Items';

export const Dropdown = (props: any) => {
    // Intialise our array of items here and map to it
    const items = ITEM_SELECTABLE;

    const handleOnClick = props.handleOnClick;

    return (<div className='Dropdown'>
        <div className='DropdownTitle'>
        </div>
        <div className='DropdownItemContainer'>
            {items.map((x: any, i:number ) => <div onClick={() => { handleOnClick(x, i); }} className="DropdownItem">
                <img src={"%PUBLIC_URL%/images/items/" + x + ".png"}></img>
            </div>)}
        </div>

    </div>)
}