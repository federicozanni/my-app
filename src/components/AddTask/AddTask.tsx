import React from 'react';
import { useForm } from 'react-hook-form'
import { Task } from '../../utils/types';

interface AddTask {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask = ({tasks, setTasks}:AddTask) => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit:any = (data: Task, e: any) => {
      
      setTasks([
        ...tasks,
        {
          id: (+new Date()).toString(),
          name: data.name
        }
      ])
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
      <button type="submit">Add new task</button>
    </form>
  );
}
 
export default AddTask;