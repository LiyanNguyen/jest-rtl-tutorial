import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import user from "@testing-library/user-event"

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {name: 'Increment'})
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  // has to to an async function since user events are all async
  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })

    // SIMULATE THE USER INTERACTION
    await user.click(incrementButton)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })

    // SIMULATE THE USER INTERACTION
    await user.click(incrementButton)
    await user.click(incrementButton)

    // CONVINIENCE API
    // click()
    // dblClick()
    // tripleClick()
    // hover()
    // unhover()
    // tab()

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    // if input has a type of number its 'spinbutton', if text its 'textbox'
    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10) // use toHaveValue when dealing with numbers

    const setButton = screen.getByRole('button', { name: 'Set' })
    await user.click(setButton)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)

    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const incrementButton = screen.getByRole('button', { name: 'Increment' })

    await user.tab() // user presses the tab key
    expect(incrementButton).toHaveFocus() // meaning this elements gets focused
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})