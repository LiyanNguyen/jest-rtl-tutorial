import { logRoles, render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })


  test('renders login button', () => {
    render(<Skills skills={skills} />)
    
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  // using 'query' keyword
  // TEST FOR ELEMENT / NODE THAT NOT PRESENT IN THE DOM
  test('Start learning button is not rendered initially', () => {
    render(<Skills skills={skills} />)

    // this would be error even if the logic is correct, cuz this element cannot be found using 'get'
    // const startLearningButton = screen.getByRole('button', { name: 'Start learning' })

    // use 'query' instead - used to assert an element that is not present
    // query returns a matching node
    const startLearningButton = screen.queryByRole('button', { name: 'Start learning' })

    expect(startLearningButton).not.toBeInTheDocument()
  })

  // using 'find' keyword
  // TEST FOR ELEMENTS APPERANCE/ DISAPPEARANCE IN THE DOM
  // now we have to make the function inside the test async
  // by default 'find' keyword rejects the promise after 1000ms
  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
     
    //useful to get the roles of every element in a component - print out list of roles in dom tree
    // logRoles(view.container)
    // useful for when debugging test code - visualize a formatted tree
    // screen.debug()
    const startLearningButton = await screen.findByRole('button', { name: 'Start learning' }, { timeout: 2000 })
    // pass a 3rd argument on 'find' with an object with a timeout key
    expect(startLearningButton).toBeInTheDocument()

  })
})