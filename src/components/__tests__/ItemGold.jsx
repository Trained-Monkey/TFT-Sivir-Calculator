import { render, screen } from "@testing-library/react"
import { ItemGold } from "../ItemGold"
import { DropdownContext } from "../../contexts/DropdownContext";

test("it renders correctly", () => {
    render(<ItemGold/>);
    const title = screen.getByText("Items to reach next interval");
    const items = screen.getAllByRole("img");

    expect(title).toBeInTheDocument();
    expect(items.length).toBe(9 * 6);
})