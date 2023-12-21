import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import BmiCalculator from './src/components/CalculateBMI'; // Adjust the import path as needed

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
    Link: jest.fn((props) => <a {...props} />),
}));

describe('BmiCalculator', () => {
    it('renders without errors', () => {
        render(<BmiCalculator />);
        expect(screen.getByText('BMI Calculator')).toBeInTheDocument();
    });

    it('calculates BMI correctly and displays the result', () => {
        render(<BmiCalculator />);

        // Mock user input
        fireEvent.change(screen.getByLabelText('Height (m):'), { target: { value: '1.75' } });
        fireEvent.change(screen.getByLabelText('Weight (kg):'), { target: { value: '70' } });
        

        // Trigger calculation
        fireEvent.click(screen.getByText('Calculate BMI'));

        // Check if the result is displayed
        expect(screen.getByText('Your BMI is: 22.86')).toBeInTheDocument();
    });

    it('displays error messages for invalid input', () => {
        render(<BmiCalculator />);

        // Provide invalid input
        fireEvent.change(screen.getByLabelText('Height (m):'), { target: { value: '-1' } });
        fireEvent.change(screen.getByLabelText('Weight (kg):'), { target: { value: '400' } });
        

        // Trigger calculation
        fireEvent.click(screen.getByText('Calculate BMI'));

        // Check if error messages are displayed
        expect(screen.getByText('Height must be greater than or equal to 0.1')).toBeInTheDocument();
        expect(screen.getByText('Weight must be less than or equal to 300')).toBeInTheDocument();
    });

    
});
