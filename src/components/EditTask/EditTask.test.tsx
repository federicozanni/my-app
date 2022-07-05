import EditTask from "./EditTask";
import { render, screen } from "@testing-library/react";

const editFn = jest.fn((tasks) => {
  return tasks
})

const setUp = () => {
  return render(<EditTask setEditing={editFn} currentTask updateTask/>)
}

// describe('Edit task', () => {
//   beforeEach(() => {
//     setUp()
//   })
  
//   it('should render component', () => {
//     const testIdBtn = screen.getByTestId("edit-task")
//     expect(testIdBtn).toBeInTheDocument()
//   })
// })