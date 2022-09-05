import React from 'react';
import { useTodo } from '../../context/TodoContext';
import { TEXT } from '../../utils/translations';
import { Task } from '../../utils/types';

const Table: React.FC = () => {
  const [{tasks}, {deleteTask, setCurrentTask}] = useTodo()

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
                  onClick={() => setCurrentTask(task)}
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