import Table from "./Table";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
<<<<<<< HEAD
import { TodoProvider } from "../../context/TodoContext";
import { TodoState } from "../../utils/types";


const task = {
  id: '456',
  name: 'task1'
}

const todoInitialState: TodoState = {
  tasks: [],
  editing: false
}

const setUp = () => {
  return render(
  <TodoProvider value={{...todoInitialState, tasks: [task]}}>
    <Table />
  </TodoProvider>
  )
=======

const setUp = () => {
  return render(<Table />)
>>>>>>> 58a0813d8ce737ca9aa8b3dabe3e4034b699e813
}

describe('Table', () => { 
  beforeEach(() => {
    setUp()
  })

  it('should render text', () => {
    const labelText = screen.getByText("Task")
    expect(labelText).toBeInTheDocument()
<<<<<<< HEAD
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
=======
  })

  it('should click edit task', () => {
    const btn = screen.getByRole('button', {name: 'Edit'})
    userEvent.click(btn)
    expect(btn).toBeInTheDocument()
  })

  it('should click delete task', () => {
    const btn = screen.getByRole('button', {name: 'Delete'})
    userEvent.click(btn)
    expect(btn).toBeInTheDocument()
  })
>>>>>>> 58a0813d8ce737ca9aa8b3dabe3e4034b699e813
})