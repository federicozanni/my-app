import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { todoInitialState, TodoProvider } from "../../context/TodoContext";
import AddTask from "./AddTask";

const setUp = () => {
  render(
    <TodoProvider value={{...todoInitialState}}>
      <AddTask />
    </TodoProvider>
  )
}

describe("Add task", () => {
  beforeEach(() => {
    setUp()
  })

  it("should render component initial", () => {
    const labelText = screen.getByText("name")
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
    })
    
  })

  it("should button submit", async () => {
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")
    userEvent.type(input, 'algo')
    const button = screen.getByRole("button")
    userEvent.click(button)
    await waitFor(() => {
      const error = screen.getByText("Al menos 5 letras.")
      expect(error).toBeInTheDocument()
    })
    
  })

  it("should input value", async () => {
    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")
    userEvent.type(input, 'algos')
    const button = screen.getByRole("button")
    userEvent.click(button)
    
    
  })
})