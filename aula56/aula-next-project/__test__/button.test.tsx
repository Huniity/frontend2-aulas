import Button from "@/components/Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Testing Button Component', () => {
    it('Clicking the button should trigger onClick event', () => {
        const handleClick = jest.fn();
        render(<Button name="Pause Me!" onClick={handleClick} />);
        const button = screen.getByText('Pause Me!');
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalled();
    });
})