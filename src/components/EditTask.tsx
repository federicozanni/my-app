import React from 'react'
import { useForm } from 'react-hook-form';

interface EditTask {
  setEditing: (value: React.SetStateAction<boolean>) => void;
  currentTask: any
  updateTask: any;
}

interface Task {
  id: string;
  name: string;
}

const EditTask: React.FC<EditTask> = ({setEditing, currentTask, updateTask}) => {

  const {register, formState: { errors }, handleSubmit, setValue} = useForm({
    defaultValues: currentTask
  });

  setValue('name', currentTask.name)

  const onSubmit = (data: Task, e: any) => {
    data.id = currentTask.id
    updateTask(currentTask.id, data)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        className='input-add-edit'
        type="text"
        {...register('name', {
          required: 'Este espacio es requerido.',
          minLength: { value: 5, message: 'Al menos 5 letras.' }
          })
      }/>
      <div>
          {errors?.name?.message}
      </div>
      <button type="submit" className='btn-edit-task'>Edit task</button>
      <button onClick={() => setEditing(false)} className="button muted-button">
          Cancel
      </button>
    </form>
    );
}
 
export default EditTask;