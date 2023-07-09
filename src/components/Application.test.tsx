import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    // getByRole should be the top preference in getting elements (according to tutorial)
    const pageHeadingElement = screen.getByRole('heading', {
      level: 1, // this means <h1>
    })
    expect(pageHeadingElement).toBeInTheDocument()

    const sectionHeadingElement = screen.getByRole('heading', {
      level: 2 // this means <h2>
    })
    expect(sectionHeadingElement).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    // substring TextMatch
    const pElement = screen.getByText('All f', { exact: false })
    expect(pElement).toBeInTheDocument()

    // regex TextMatch
    const pElement2 = screen.getByText(/e mandatory/i)
    expect(pElement2).toBeInTheDocument()

    // function TextMatch
    const pElement3 = screen.getByText(content => content.startsWith('All f'))
    expect(pElement3).toBeInTheDocument()

    // using getByTitle
    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    // using getByAltText - returns the element of img, input, area or custom HTML elements with alt attribute
    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    // using getByTestId
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name' // the text inside the <label> element whos for refer to this textbox
    })
    expect(nameElement).toBeInTheDocument()

    // using getByLabelText
    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input' //refers the <input> with a  label text of 'Name' if possible
    } )
    expect(nameElement2).toBeInTheDocument()

    // using getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    // using getByDisplayValue - returns the value of an input, textarea, select element
    const nameElement4 = screen.getByDisplayValue('Jose')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio' // the text inside the <label> element whos for refer to this textbox
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationEleent = screen.getByRole('combobox')
    expect(jobLocationEleent).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    // using getByLabelText
    const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})