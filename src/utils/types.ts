import { 
  SET_TASKS,
  SET_EDITING,
  SET_CURRENT_TASK,
  SET_DELETE_TASK,
  SET_EDIT_TASK
} from "../actionTypes/TodoTypes";

export interface Task {
  id: string;
  name: string;
}

export interface TodoState {
  tasks: Task[];
  editing: boolean;
  currentTask: Task;
}

export interface TodoDispatch {
  addTasks: (payload: Task) => void;
  setEditing: (payload: boolean) => void;
  deleteTask: (payload: string) => void;
  setCurrentTask: (payload: Task) => void;
  editTask: (payload: Task) => void;
}

export type TodoContextProps = [
  finalState: TodoState,
  dispatchers: TodoDispatch
]


export type TodoAction = 
  | { type: `${typeof SET_TASKS}`, payload: Task[] }
  | { type: `${typeof SET_EDITING}`, payload: boolean }
  | { type: `${typeof SET_CURRENT_TASK}`, payload: Task }
  | { type: `${typeof SET_DELETE_TASK}`, payload: Task[] }
  | { type: `${typeof SET_EDIT_TASK}`, payload: Task[] }

export type TodoProviderProps = {
  children: JSX.Element;
  value?: TodoState;
}