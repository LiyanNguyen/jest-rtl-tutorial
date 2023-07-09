import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

// Greet should render the text hello
// if a name is passed into the component, it should render hello followed by the name

// use describe to group tests cases together
// also possible to use:
// describe.only(...)
// describe.skip(...)

describe('Greet', () => {  
  test('renders correctly', () => {
    render(<Greet />)
    
    const textElement = screen.getByText(/hello/i)
    
    expect(textElement).toBeInTheDocument()
    
  })
  
  // test.only(...) - only test this one
  // test.skip(...) - skip this one

  // you can also have nested describes
  describe('Nested', () => {
    test('renders with a name', () => {
      render(<Greet name={'Lee'} />)
      
      const textElement = screen.getByText(/hello lee/i)
      
      expect(textElement).toBeInTheDocument()
      
    })
  })
})

describe('Another Group', () => {
  // you can also use the it(...) keyword
  it('renders with a name Jose', () => {
    render(<Greet name={'Jose'} />)

    const textElement = screen.getByText(/hello jose/i)

    expect(textElement).toBeInTheDocument()

  })

  // test.only(...) can be used as fit(...)
  // test.skip(...) can be used as xit(...)
})

// things to test in react
// 1. test component renders
// 2. test component render with props
// 3. test component renders in different states (logged in page should render if logged in, and not if not logged in)
// 4. test component reacts to events (button, forms)


// what not to test in react
// 1. implementation details (we want to test the behaviour NOT the way its implemented)
// 2. third party code (external library eg. MUI)
// 3. code that is not important from users pov (basically QA mindset)

// RTL QUERY STRUCTURE
// render(<Component/>)
// find the element
// assert against element: expect(element).something()

// FIND ELEMENTS ON COMPONENT
// getBy, queryBy, findBy