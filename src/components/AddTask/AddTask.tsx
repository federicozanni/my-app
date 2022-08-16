import React from 'react';
import { useForm } from 'react-hook-form'
import { TEXT } from '../../utils/translations';
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
      <button type="submit">{TEXT.addTask}</button>
    </form>
  );
}
 
export default AddTask;