import React from 'react';
import { useTodo } from '../../context/TodoContext';
import { TEXT } from '../../utils/translations';
import { Task } from '../../utils/types';

const Table: React.FC = () => {
  const [{tasks}, {deleteTask, setCurrentTask}] = useTodo()

  return (
    <table className='table'>
      <thead className='table__thead'>
        <tr className='table__thead--tr'>
          <th>{TEXT.task}</th>
          <th>{TEXT.actions}</th>
        </tr>
      </thead>
      <tbody className='table__tbody'>
        {
          tasks.map((task: Task) => (
            <tr className='table__tbody--tr' key={task.id}>
              <td>{task.name}</td>
              <td>
              <button 
                  className="table__button--edit"
                  onClick={() => setCurrentTask(task)}
                  >
                  {TEXT.edit}
              </button>
              <button 
                  className="table__button--delete"
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