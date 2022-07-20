import EditTask from "./EditTask";
import { render, screen, waitFor } from "@testing-library/react";
import { Task } from "../../utils/types";
import userEvent from "@testing-library/user-event";

const setTasks = jest.fn((tasks) => {
  return {
    ...tasks,
    id: tasks.id, 
    name: tasks.name
  }
})

const currentTask = {
  id: '', 
  name: ''
}

const tasks:Task[] = [{
  id: '5454', 
  name: 'hola'
}]

const setUp = () => {
  return render(<EditTask setEditing={(e=false) => e} currentTask={currentTask} setTasks={setTasks} tasks={tasks}/>)
}

describe('Edit task', () => {
  beforeEach(() => {
    setUp()
  })

  it('should cancel', () => {

  })
})