import React from 'react';
import { TEXT } from '../../utils/translations';
import { Task } from '../../utils/types';

interface TableTask {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTask: React.Dispatch<React.SetStateAction<Task>>;
}

const Table: React.FC<TableTask> = ({tasks, setTasks, setEditing, setCurrentTask}) => {
  
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task:Task) => task.id !== id))
  }

  const editRow = (task:Task) => {
    setEditing(true) 
    setCurrentTask({ id: task.id, name: task.name })
  }

  

  return (
    <table>
      <thead>
        <tr>
          <th>{TEXT.task}</th>
          <th>{TEXT.actions}</th>
        </tr>
      </thead>
      <tbody>
        {
          tasks.map((task: Task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>
              <button 
                  className="button-table-edit"
                  onClick={() => editRow(task)}
                  >
                  {TEXT.edit}
              </button>
              <button 
                  className="button-table-delete"
                  onClick={() => deleteTask(task.id)}
                  >
                  {TEXT.delete}
              </button>
              </td>
            </tr>
            ))
        }
      </tbody>
    </table>
  )
}

export default Table