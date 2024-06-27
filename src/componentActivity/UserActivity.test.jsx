import { describe, it, expect } from 'vitest';
import UserActivityClass from './UserActivityClass';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import UserActivityComponent from './UserActivityComponent';

describe('UserActivityClass', () => {
  it('should display initial username correctly', () => {
    const userActivityClass = new UserActivityClass();
    const initialUsername = userActivityClass.getUsername();

    expect(initialUsername).toBe('');

    userActivityClass.setUsername('John Doe');
    const updatedUsername = userActivityClass.getUsername();

    expect(updatedUsername).toBe('John Doe');
  });
});

describe('UserActivity Component', () => {

  it('Should display placeholder text', () => {
    render(<UserActivityComponent />);

    const input = screen.getByPlaceholderText("Please enter the value");
    const display = screen.getByTestId("username-display");

    expect(input).toBeInTheDocument();
    expect(display).toBeInTheDocument();
    expect(display.innerHTML).toEqual('');
  });

  it('Should display the text typed by the user', async () => {
    render(<UserActivityComponent />);

    const input = screen.getByPlaceholderText("Please enter the value");
    const emptyDisplay = screen.getByTestId("username-display");
    expect(input).toBeInTheDocument();
    expect(emptyDisplay).toBeInTheDocument();
    expect(emptyDisplay.innerHTML).toEqual('');
    
    await act(() => userEvent.type(input, 'Hello World'));
    const display = await screen.getByTestId("username-display");

    expect(display).toBeInTheDocument();
    expect(display.innerHTML).toEqual('Hello World');
  });

});