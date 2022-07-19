import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTask from "./AddTask";

const setTasks = jest.fn((tasks) => {
  return [
    ...tasks,
    {
      id: tasks.id, 
      name: tasks.name
    }
  ]
})

const setUp = () => {
  const initialValues = [{
    id: '6545', 
    name: 'task1'
  }]

  return render(<AddTask tasks={initialValues} setTasks={setTasks}/>)
}

describe("Add task", () => {
  beforeEach(() => {
    setUp()
  })

  it("should render component initial", () => {
    const labelText = screen.getByText("Name")
    expect(labelText).toBeInTheDocument()
  })

  it("should type inside input", () => {
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")
    userEvent.type(input, "task")
    expect(input).toHaveValue("task")
    //screen.debug(undefined, 1000)
  })

  it("should button value", async () => {
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")
    const button = screen.getByRole("button")
    userEvent.click(button)
    await waitFor(() => {
      const error = screen.getByText("Este espacio es requerido.")
      expect(error).toBeInTheDocument()
      expect(setTasks).not.toBeCalled()
    })
    
  })
})