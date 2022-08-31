import { TodoAction, TodoState } from '../utils/types';
import { 
  SET_TASKS,
  SET_EDITING,
  SET_CURRENT_TASK,
  SET_DELETE_TASK,
  SET_EDIT_TASK
} from '../actionTypes/TodoTypes';
import { todoInitialState } from '../context/TodoContext';

export const todoReducer = ( state: TodoState, action: TodoAction ) => {

  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }

    case SET_EDITING:
      return {
        ...state,
        editing: action.payload,
      }

    case SET_CURRENT_TASK:
      return {
        ...state,
        editing: true,
        currentTask: action.payload,
      }

    case SET_DELETE_TASK:
      return {
        ...state,
        tasks: action.payload,
      }

    case SET_EDIT_TASK:
      return {
        ...state,
        editing: false,
        tasks: action.payload,
      }
      
    default:
      return state;
  }
}