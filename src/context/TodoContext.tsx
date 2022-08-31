import React from 'react'
import { todoReducer } from '../reducer/TodoReducer';
import { TodoState, TodoContextProps, Task, TodoProviderProps } from '../utils/types';
import { 
  SET_TASKS,
  SET_EDITING,
  SET_CURRENT_TASK,
  SET_DELETE_TASK,
  SET_EDIT_TASK
} from '../actionTypes/TodoTypes';

export const TodoContext = React.createContext({} as TodoContextProps)

const initialValues = {
  id: '', 
  name: ''
}

export const todoInitialState: TodoState = {
  tasks: [],
  editing: false,
  currentTask: initialValues
}

export const TodoProvider = ({children, value}: TodoProviderProps) => {
  
  const [state, dispatch] = React.useReducer(todoReducer, todoInitialState);

  const addTasks = (payload: Task) => {
    const setTask = [
        ...state.tasks,
        {
          id: (+new Date()).toString(),
          name: payload.name
        }
      ]

    dispatch({
      type: SET_TASKS,
      payload: setTask
    })
  }

  const setEditing = (payload: boolean) => {
    dispatch({
      type: SET_EDITING,
      payload: payload
    })
  }

  const deleteTask = (payload: string) => {
    const taskFilter = state.tasks.filter((task: Task) => task.id !== payload)

    dispatch({
      type: SET_DELETE_TASK,
      payload: taskFilter
    })
  }

  const editRow = (payload: Task) => {
    const setCurrentTask = { id: payload.id, name: payload.name }

    dispatch({
      type: SET_CURRENT_TASK,
      payload: setCurrentTask
    })
  }

  const editTask = (payload: Task) => {
    const taskEdit = state.tasks.map((task:Task) => (task.id === state.currentTask.id ? payload : task))

    dispatch({
      type: SET_EDIT_TASK,
      payload: taskEdit
    })
  }

  return(
    <TodoContext.Provider value={{
      ...state,
      ...value,
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