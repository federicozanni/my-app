export interface Task {
  id: string;
  name: string;
}

export type TodoContextProps = {
  tasks: Task[];
  editing: boolean;
  currentTask: Task;
  addTasks: (payload: Task | any) => void;
  setEditing: (payload: boolean) => void;
  deleteTask: (payload: string) => void;
  editRow: (payload: Task) => void;
  editTask: (payload: Task) => void;
}

export interface TodoState {
  tasks: Task[];
  editing: boolean;
}

export type TodoAction = 
  | { type: 'setTasks', payload: Task[] }
  | { type: 'setEditing', payload: boolean }