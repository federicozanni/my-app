import React from 'react'
import { todoReducer } from '../reducer/TodoReducer';
import { TodoState, TodoContextProps, Task } from '../utils/types';

export const TodoContext = React.createContext({} as TodoContextProps)

const initialValues = {
  id: '', 
  name: ''
}

const todoInitialState: TodoState = {
  tasks: [],
  editing: false
}

export const TodoProvider = ({children, value}:any) => {
  const [tasks, setTask] = React.useState<Task[]>(todoInitialState.tasks)
  const [editing, setEdit] = React.useState(todoInitialState.editing)
  const [currentTask, setCurrentTask] = React.useState(initialValues)

  const [state, dispatch] = React.useReducer(todoReducer, todoInitialState);

  const addTasks = (payload: Task) => {
    setTask([
      ...tasks,
      {
        id: (+new Date()).toString(),
        name: payload.name
      }
    ])

    dispatch({
      type: 'setTasks',
      payload: tasks
    })
  }

  const setEditing = (payload: boolean) => {
    setEdit(payload)

    dispatch({
      type: 'setEditing',
      payload: payload
    })
  }

  const deleteTask = (payload: string) => {
    setTask(tasks.filter((task: Task) => task.id !== payload))
  }

  const editRow = (payload: Task) => {
    setEditing(true)
    setCurrentTask({ id: payload.id, name: payload.name })
  }

  const editTask = (payload: Task) => {
    setEditing(false)
    setTask(tasks.map((task:Task) => (task.id === currentTask.id ? payload : task)))
  }

  return(
    <TodoContext.Provider value={{
      ...state,
      ...value,
      tasks,
      editing,
      currentTask,
      addTasks,
      setEditing,
      deleteTask,
      editRow,
      editTask
    }}>
      {children}
    </TodoContext.Provider>
  )
}