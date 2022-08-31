import EditTask from "./EditTask";
import { render, screen, waitFor } from "@testing-library/react";
import { todoInitialState, TodoProvider } from "../../context/TodoContext";

const task = {
  id: '456',
  name: 'task1'
}

const setUp = () => {
  return render(
  <TodoProvider value={{...todoInitialState, currentTask: task, editing: true}}>
    <EditTask />
  </TodoProvider>
  )
}

describe('Edit task', () => {
  beforeEach(() => {
    setUp()
  })

  it('should render EditTask', () => {
    const component = render(<EditTask />)
    expect(component).toBeDefined()
  })
})