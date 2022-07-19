import React, {useState} from 'react';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import Table from '../components/Table';
import { Task } from '../utils/types';

const App = () => {

  const initialValues = {
    id: '', 
    name: ''
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [editing, setEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState(initialValues)

  return (
    <div className="app-container">
      <h1>To do list</h1>
      <article className="article-container">
        <section className="add-edit-task">
        {editing ? (
          <div data-testid="edit-task">
            <h2>Edit task</h2>
            <EditTask 
              setEditing={setEditing}
              currentTask={currentTask}
              setTasks={setTasks}
              tasks={tasks}
            />
          </div>
        ) : (
          <div>
            <h2>Add task</h2>
            <AddTask tasks={tasks} setTasks={setTasks} />
          </div>
        )}
      </section>
        <section className="view-task">
          <h2>View tasks</h2>
          {
            tasks.length > 0 
            ? <Table tasks={tasks} setTasks={setTasks} setEditing={setEditing} setCurrentTask={setCurrentTask} />
            : <div>No tasks</div>
          }
          
        </section>
      </article>
    </div>
  );
}

export default App;
