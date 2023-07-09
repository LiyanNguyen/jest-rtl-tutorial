import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../mocks/server";
import { rest } from "msw";

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)

    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  // MOCK API TESTING
  test('renders a list of users', async () => {
    render(<Users />)

    // when using keyword 'All' it needs to be in async function and be in await
    const users = await screen.findAllByRole('listitem')

    // asserting against a mock response
    expect(users).toHaveLength(3)
  })

  // MOCK API TESTING
  test('renders error', async () => {
    // reset the handler, create mock API to return a error response 500
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => res(ctx.status(500)) 
      )
    )

    render(<Users />)

    // find the error text
    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})
