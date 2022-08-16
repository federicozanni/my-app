import Table from "./Table";
import { render, screen } from "@testing-library/react";
import { Task } from "../../utils/types";
import userEvent from "@testing-library/user-event";


const tasks:Task[] = [{
  id: '5454', 
  name: 'hola'
}]

const setTasks = jest.fn((tasks) => {
  return {
    ...tasks,
    id: tasks.id, 
    name: tasks.name
  }
})


const setUp = () => {
  return render(<Table tasks={tasks} setTasks={setTasks} setEditing={(e=false) => e} setCurrentTask={(e) => e} />)
}

describe('Table', () => { 
  beforeEach(() => {
    setUp()
  })

  it('should render text', () => {
    const labelText = screen.getByText("Task")
    expect(labelText).toBeInTheDocument()
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
})