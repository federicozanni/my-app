import React, {useState} from 'react';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import Table from '../components/Table';
import { TEXT } from '../utils/translations';
import { Task } from '../utils/types';

const App = () => {

  const initialValues = {
    id: '', 
    name: ''
  }

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '333', 
      name: 'dddd'
    }
  ]);
  const [editing, setEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState(initialValues)

  return (
    <div className="app-container">
      <h1>{TEXT.toDoList}</h1>
      <article className="article-container">
        <section className="add-edit-task">
        {editing ? (
          <div data-testid="edit-task">
            <h2>{TEXT.editTask}</h2>
            <EditTask 
              setEditing={setEditing}
              currentTask={currentTask}
              setTasks={setTasks}
              tasks={tasks}
            />
          </div>
        ) : (
          <div>
            <h2>{TEXT.addTask}</h2>
            <AddTask tasks={tasks} setTasks={setTasks} />
          </div>
        )}
      </section>
        <section className="view-task">
          <h2>{TEXT.viewTask}</h2>
          {
            tasks.length > 0 
            ? <Table tasks={tasks} setTasks={setTasks} setEditing={setEditing} setCurrentTask={setCurrentTask} />
            : <div>{TEXT.noTask}</div>
          }
          
        </section>
      </article>
    </div>
  );
}

export default App;
