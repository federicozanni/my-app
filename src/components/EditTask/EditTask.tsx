import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { TodoContext } from '../../context/TodoContext';
import { TEXT } from '../../utils/translations';
import { Task } from '../../utils/types';

const EditTask: React.FC = () => {
  const { currentTask, editTask, setEditing } = useContext(TodoContext);

  const {register, formState: { errors }, handleSubmit, reset} = useForm({
    defaultValues: currentTask
  });

  const onSubmit = (data: Task) => {
    editTask(data)
    reset()
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