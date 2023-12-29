import { render, screen, act } from "@testing-library/react";
import { Stat } from "../Stat";
import DropdownProvider from '../../contexts/DropdownContext.tsx';
import StatProvider, { StatContext } from '../../contexts/StatContext.tsx'
import { userEvent } from '@testing-library/user-event'
import { ITEM_MODIFIER, ITEM_NAMES } from "../../constants/Items.tsx";

const baseValue = {
    baseAD: 60,
    modifierAD: 1.0
};

describe("default state", () => {
    

    test("it shows text correctly", () => {
        

        render(<StatProvider>
            <Stat />
        </StatProvider>);

        const expectedGold = Math.floor(baseValue.baseAD / 42);
        const currentGold = screen.getByText("Current gold per turn: " + expectedGold.toString());
        const currentAd = screen.getByText(/Total AD:/);

        expect(currentGold).toBeInTheDocument();
        expect(currentAd).toBeInTheDocument();
    })

    test("it shows images", () => {
        render(<Stat />)
        const images = screen.getAllByRole("img");

        expect(images.length).toBe(4);
    })
})

describe("level selector", () => {
    test("it can be clicked", async () => {
        render(<StatProvider>
            <DropdownProvider>
                <Stat />
            </DropdownProvider>
        </StatProvider>);

        const element = screen.getAllByRole('radio')[1];
        await act(async () => {
            await userEvent.click(element);

        });

        const expectedGold = Math.floor((baseValue.baseAD * 1.5) / 42);
        const goldElement = screen.getByText("Current gold per turn: " + expectedGold.toString());

        expect(goldElement).toBeInTheDocument();
    })
})

describe("item selector", () => {
    test("it can be clicked", async () => {
        render(<StatProvider>
            <DropdownProvider>
                <Stat />
            </DropdownProvider>
        </StatProvider>);

        const element = screen.getAllByRole('img')[1];
        await act(async () => {
            await userEvent.click(element);

        });

        const dropdown = screen.getByTestId("DropdownComponent");
        expect(dropdown).toBeInTheDocument();
    })

    test("items selected updates value", async () => {
        render(<StatProvider>
            <DropdownProvider>
                <Stat />
            </DropdownProvider>
        </StatProvider>);

        const element = screen.getAllByRole('img')[1];
        await act(async () => {
            await userEvent.click(element);

        });

        const deathbladeElement = screen.getByTestId(ITEM_NAMES.DEATHBLADE);
        await act(async () => {
            await userEvent.click(deathbladeElement);

        });

        const expectedGold = Math.floor((baseValue.baseAD * (1.0 + ITEM_MODIFIER.Deathblade)) / 42);
        const goldElement = screen.getByText("Current gold per turn: " + expectedGold.toString());

        expect(goldElement).toBeInTheDocument();
    })
})