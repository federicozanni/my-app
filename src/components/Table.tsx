import React from 'react';

interface Task {
  id: string;
  name: string;
}

interface EditTask {
  tasks: any;
  deleteTask: (id: string) => void;
  editRow: (task: Task) => void;
}

const Table: React.FC<EditTask> = ({tasks, deleteTask, editRow}) => (
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Actions</th>
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
                onClick={() => {
                    editRow(task)
                }}
                >
                Edit
            </button>
            <button 
                className="button-table-delete"
                onClick={() => deleteTask(task.id)}
                >
                Delete
            </button>
            </td>
          </tr>
          ))
      }
    </tbody>
  </table>
)

export default Table