import { TodoAction, TodoState } from '../utils/types';

export const todoReducer = ( state: TodoState, action: TodoAction ) => {

  switch (action.type) {
    case 'setTasks':
      return {
        ...state,
        tasks: action.payload
      }
    case 'setEditing':
      return {
        ...state,
        editing: action.payload,
      }

    default:
      return state;
  }
}