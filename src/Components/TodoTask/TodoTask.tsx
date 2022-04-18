import ITask from '../../Interfaces/Todo.interface';

interface Props {
  todo: ITask,
  completeTask(taskNameToDelete: string): void,
};

const TodoTask = ({ todo, completeTask }: Props) => {

  return (
    <div className="todo">
      <div className='todo-content'>
        <span className='todo-span right-border-white'>{todo.taskName}</span>
        <span className='todo-span'>{todo.deadline}</span>
        <button className='remove-button' onClick={() => completeTask(todo.taskName)}>X</button>
      </div>
    </div>
  )
};

export default TodoTask;