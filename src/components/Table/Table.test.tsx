import Table from "./Table";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setUp = () => {
  return render(<Table />)
}

describe('Table', () => { 
  beforeEach(() => {
    setUp()
  })

  it('should render text', () => {
    const labelText = screen.getByText("Task")
    expect(labelText).toBeInTheDocument()
  })

  // it('should click edit task', () => {
  //   const btn = screen.getByRole('button', {name: 'Edit'})
  //   userEvent.click(btn)
  //   expect(btn).toBeInTheDocument()
  // })

  // it('should click delete task', () => {
  //   const btn = screen.getByRole('button', {name: 'Delete'})
  //   userEvent.click(btn)
  //   expect(btn).toBeInTheDocument()
  // })
})