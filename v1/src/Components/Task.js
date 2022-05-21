import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    
    <div className = 'task'>
      <input type='checkbox' className='check-task'/>
      <div className='task-info'>
          <h3>
              {task.text}  
          </h3>
          <FaTimes className='x-btn'
            onClick = {() => onDelete(task.id)}
          />
      </div>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
