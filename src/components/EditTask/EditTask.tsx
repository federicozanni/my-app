import React from 'react'
import { useForm } from 'react-hook-form';
import { TEXT } from '../../utils/translations';
import { Task } from '../../utils/types';

interface EditTask {
  setEditing: (value: React.SetStateAction<boolean>) => void;
  currentTask: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
}

const EditTask: React.FC<EditTask> = ({setEditing, currentTask, setTasks, tasks}) => {

  const {register, formState: { errors }, handleSubmit, setValue} = useForm({
    defaultValues: currentTask
  });

  setValue('name', currentTask.name)

  const onSubmit = (data: Task, e: any) => {
    data.id = currentTask.id
    setEditing(false)
    setTasks(tasks.map((task:Task) => (task.id === currentTask.id ? data : task)))
    e.target.reset()
  }

  const handleEditin = () => {
    setEditing(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>{TEXT.name}</label>
      <input
        className='input-add-edit'
        type="text"
        {...register('name', {
          required: TEXT.validations.requiere,
          minLength: { value: 5, message:  TEXT.validations.min }
          })
      }/>
      <div>
          {errors?.name?.message}
      </div>
      <button type="submit" className='btn-edit-task'>{TEXT.editTask}</button>
      <button onClick={handleEditin} className="button muted-button">
          {TEXT.cancel}
      </button>
    </form>
    );
}
 
export default EditTask;