import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/layout/Navbar'

describe('Testing if Navbar is rendering', () => {
    it('Should render Navbar', () => {
        render(<Navbar />);
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    });
})