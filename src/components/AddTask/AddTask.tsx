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