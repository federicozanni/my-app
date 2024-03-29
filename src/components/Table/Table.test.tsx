import Table from "./Table";
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { todoInitialState, TodoProvider } from "../../context/TodoContext";


const task = {
  id: '456',
  name: 'task1'
}

const setUp = () => {
  return render(
  <TodoProvider value={{...todoInitialState, tasks: [task]}}>
    <Table />
  </TodoProvider>
  )
}

describe('Table', () => { 
  beforeEach(() => {
    setUp()
  })

  it('should render text', () => {
    const labelText = screen.getByText("Task")
    expect(labelText).toBeInTheDocument()
    screen.debug(undefined)
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