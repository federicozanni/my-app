import { useForm } from 'react-hook-form'
import { useTodo } from '../../context/TodoContext';
import { TEXT } from '../../utils/translations';
import { Task } from '../../utils/types';

const AddTask = () => {
  const [, {addTasks}] = useTodo()

    const {register, formState: { errors }, handleSubmit, reset} = useForm();

    const onSubmit:any = (data: Task) => {
      addTasks(data)
      reset()
    }

  return (
    <form className='add__task' onSubmit={handleSubmit(onSubmit)}>
      <label>{TEXT.name}</label>
      <input
        className='task__input'
        type="text"
        {...register('name', {
          required: TEXT.validations.requiere,
          maxLength: { value: 50, message: TEXT.validations.max},
          minLength: { value: 5, message:  TEXT.validations.min }
          })
        }/>
      <div>
        {errors?.name?.message}
      </div>
      <button className='add__task__button' type="submit">{TEXT.addTask}</button>
    </form>
  );
}
 
export default AddTask;