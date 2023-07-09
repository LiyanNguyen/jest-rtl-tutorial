import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user  from "@testing-library/user-event";

// TESTING FUNCTIONS - MOCKING FUNCTIONS
describe('CounterTWo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    
    const textElement = screen.getByText('Counter Two')
    expect(textElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    user.setup()
    // CREATING MOCK FUNCTIONS - now we dont have to worry about actual implementation of these functions
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()

    render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler} />)
    
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })

    expect(incrementButton).toBeInTheDocument()
    expect(decrementButton).toBeInTheDocument()

    await user.click(incrementButton)
    await user.click(decrementButton)

    // ASSERT mock functions to have been called
    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})