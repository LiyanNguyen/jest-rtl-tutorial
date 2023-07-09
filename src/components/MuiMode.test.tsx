import { render, screen } from "@testing-library/react"
import MuiMode from "./MuiMode"
import AppProviders from "../providers/AppProviders"

// TESTING COMPONENTS WITH INSIDE PROVIDERS
describe('MuiMode', () => {
  test('renders  text correctly', () => {
    render(<MuiMode />, { wrapper: AppProviders })
    // some components need to be inside a wrapper (usually a provider)

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})