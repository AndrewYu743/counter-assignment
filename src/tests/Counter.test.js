// import necessary react testing library helpers here
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import Counter from '../components/Counter';

// import the Counter component here

beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);

})

test('renders counter message', () => {
    // Complete the unit test below based on the objective in the line above
    const welcomeMessage = screen.getByText(/Counter/i);
    expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    // Complete the unit test below based on the objective in the line above

    const init = screen.getByTestId('count');
    expect(init).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    // Complete the unit test below based on the objective in the line above
    const increment = screen.getByText('+');
    const counting = screen.getByTestId('count');
    userEvent.click(increment);
    expect(counting).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    const increment = screen.getByText('-');
    const counting = screen.getByTestId('count');
    userEvent.click(increment);
    expect(counting).toHaveTextContent('-1');


});

