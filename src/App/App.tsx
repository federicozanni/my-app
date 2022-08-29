import {useContext} from 'react';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import Table from '../components/Table';
import { TodoContext } from '../context/TodoContext';
import { TEXT } from '../utils/translations';

const App = () => {

  const { tasks, editing } = useContext(TodoContext);

  return (
    <div className="app-container">
      <h1>{TEXT.toDoList}</h1>
      <article className="article-container">
        <section className="add-edit-task">
        {editing ? (
          <div data-testid="edit-task">
            <h2>{TEXT.editTask}</h2>
            <EditTask />
          </div>
        ) : (
          <div>
            <h2>{TEXT.addTask}</h2>
            <AddTask />
          </div>
        )}
      </section>
        <section className="view-task">
          <h2>{TEXT.viewTask}</h2>
          {
            tasks.length > 0 
            ? <Table />
            : <div>{TEXT.noTask}</div>
          }
        </section>
      </article>
    </div>
  );
}

export default App;
