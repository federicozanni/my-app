import React, {useState} from 'react';
import Table from './components/Table';
import EditTask from './components/EditTask';
import AddTask from './components/AddTask';

const App = () => {

  interface Task {
    id: string;
    name: string;
  }


  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask: (task: Task) => void = (task: Task) => {
    task.id = (+new Date()).toString();
    setTasks([
      ...tasks,
      task
    ])
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task:Task) => task.id !== id))
  }

  const [editing, setEditing] = useState(false)

  const [currentTask, setCurrentTask] = useState({ id: '', name: '' })

  const editRow = (task:Task) => {
    setEditing(true) 
    setCurrentTask({ id: task.id, name: task.name })
  }

  const updateTask = (id:any, updateTask:() => void) => {
    setEditing(false)
    setTasks(tasks.map((task:any) => (task.id === id ? updateTask : task)))
  }

  return (
    <div className="app-container">
      <h1>To do list</h1>
      <article className="article-container">
        <section className="add-edit-task">
        {editing ? (
          <div>
            <h2>Edit task</h2>
            <EditTask 
              setEditing={setEditing}
              currentTask={currentTask}
              updateTask={updateTask}
            />
          </div>
        ) : (
          <div>
            <h2>Add task</h2>
            <AddTask addTask={addTask}  />
          </div>
        )}
      </section>
        <section className="view-task">
          <h2>View tasks</h2>
          {
            tasks.length > 0 
            ? <Table tasks={tasks} deleteTask={deleteTask} editRow={editRow} />
            : <div>No tasks</div>
          }
          
        </section>
      </article>
    </div>
  );
}

export default App;
