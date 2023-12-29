import { Footer } from "../Footer";
import { render, screen } from "@testing-library/react";
const disclaimer = "TFT Sivir Calculator isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.";

test("renders disclaimer", () => {
    render(<Footer/>);
    const element = screen.getByText(disclaimer);

    expect(element).toBeInTheDocument();
})