// Meant to test the individual functionality of the dropdown component:
// - Check it correctly renders
// - Check it renders with the correct number of items
// - Check dropdown elements can be clicked

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Dropdown } from '../Dropdown';
import { ITEM_SELECTABLE } from '../../constants/Items';

describe('Dropdown', () => {
    test('renders correctly', () => {
        render(<Dropdown />)
        
        const elements = screen.getAllByRole('img')
        elements.map((element) => {
            expect(element).toHaveAttribute('src')
        })
    });

    test('has correct number of elements', () => {
        render(<Dropdown />)
        
        const elements = screen.getAllByRole('img')
        expect(elements.length).toBe(ITEM_SELECTABLE.length)
    });

    test('can be clicked on', async () => {
        const mockHandleClick = jest.fn();
        render(<Dropdown

            handleOnClick={mockHandleClick}
        />)

        const element = screen.getAllByRole('img')[0];

        await userEvent.click(element);
        expect(mockHandleClick).toHaveBeenCalled();
    })
})
