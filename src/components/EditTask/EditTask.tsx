import React from 'react'
import { useForm } from 'react-hook-form';
import { initialValues, useTodo } from '../../context/TodoContext';
import { TEXT } from '../../utils/translations';
import { Task } from '../../utils/types';

const EditTask: React.FC = () => {
  const [{currentTask}, {editTask, setEditing, setCurrentTask}] = useTodo()

  const {register, formState: { errors }, handleSubmit, reset} = useForm({
    defaultValues: currentTask
  });

  const onSubmit = (data: Task) => {
    editTask(data)
    reset()
  }

  const handleEditin = () => {
    setEditing(false)
    setCurrentTask(initialValues)
  }

  return (
    <form className='edit__task' onSubmit={handleSubmit(onSubmit)}>
      <label>{TEXT.name}</label>
      <input
        className='task__input'
        type="text"
        defaultValue={currentTask.name}
        {...register('name', {
          required: TEXT.validations.requiere,
          maxLength: { value: 50, message: TEXT.validations.max},
          minLength: { value: 5, message:  TEXT.validations.min }
          })
      }/>
      <div>
          {errors?.name?.message}
      </div>
      <button type="submit" className='edit__task__button--edit'>{TEXT.editTask}</button>
      <button onClick={handleEditin} className="edit__task__button--cancel">
          {TEXT.cancel}
      </button>
    </form>
    );
}
 
export default EditTask;