import { render, screen } from "@testing-library/react";
import Table from "../../components/Table";
import { Task } from "../../utils/types";
import App from "../App";

const setTasks = jest.fn((tasks) => {
  return {
    ...tasks,
    id: tasks.id, 
    name: tasks.name
  }
})

const tasks:Task[] = [{
  id: '5454', 
  name: 'hola'
}]

const setUp = () => {
  return render(<App />)
}

describe("App", () => {
  beforeEach(() => {
    setUp()
  })

  it("should get id", () => {
    render(<Table tasks={tasks} setTasks={setTasks} setEditing={(e=false) => e} setCurrentTask={(e) => e} />)
    const element = screen.getByTestId('edit-task')
    expect(element).toBeInTheDocument()
  })
  
})