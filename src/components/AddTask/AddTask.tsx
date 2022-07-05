import React from 'react';
import { useForm } from 'react-hook-form'

interface Task {
    id: string;
    name: string;
  }

interface AddTask {
    addTask: (task: Task) => void;
}

const AddTask: React.FC<AddTask> = ({addTask}) => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit: any = (data: Task, e: any) => {
      data.id = ''
      addTask(data)
      e.target.reset();
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
      <button type="submit">Add new task</button>
    </form>
  );
}
 
export default AddTask;