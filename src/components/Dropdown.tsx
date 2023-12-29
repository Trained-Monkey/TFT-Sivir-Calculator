import { ITEM_SELECTABLE } from '../constants/Items';

export const Dropdown = (props: any) => {
    // Intialise our array of items here and map to it
    const items = ITEM_SELECTABLE;

    const handleOnClick = props.handleOnClick;

    return (<div className='Dropdown' data-testid="DropdownComponent">
        <div className='DropdownTitle'>
        </div>
        <div className='DropdownItemContainer' >
            {items.map((name: any, i:number ) => <div key={name} data-testid={name} onClick={() => { handleOnClick(name, i); }} className="DropdownItem">
                <img src={"./images/items/" + name + ".png"} alt=""></img>
            </div>)}
        </div>


    </div>)
}