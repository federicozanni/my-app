import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import Table from '../components/Table';
import { useTodo } from '../context/TodoContext';
import { TEXT } from '../utils/translations';

const App = () => {
  const [{tasks, editing}] = useTodo()

  return (
    <div className="app__container">
      <h1 className="app__container--title">{TEXT.toDoList}</h1>
      <article className="article__container">
        <section className="action__task">
        {editing ? (
          <div data-testid="edit__task">
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
        <section className="view__task">
          <h2 className="view__task--title">{TEXT.viewTask}</h2>
          {
            tasks.length > 0 
            ? <Table />
            : <div className="view__task--subtitle">{TEXT.noTask}</div>
          }
        </section>
      </article>
    </div>
  );
}

export default App;
