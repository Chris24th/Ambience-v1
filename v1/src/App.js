
import {useState} from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import MainHeader from './Components/MainHeader'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 5, 2:30pm',
      reminder: true,
    },
    {
      id:2,
      text: 'Dog Walk',
      day: 'Feb 20, 4:30pm',
      reminder: true,
    },
    {
      id:3,
      text: 'Meeting',
      day: 'Feb 27, 7:30am',
      reminder: false,
    }
  ])
  //Add task
  const addTask = (task) =>{
    const id = 5
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task )=> task.id !== id))
  }
  // toogle reminder
  const toggleReminder = (id) => {
    setTasks
      (tasks.map((task) => task.id === id 
      ? {...task, reminder:
      !task.reminder} : task
      )
    )
  }
  return (
    <div>
      <MainHeader />
      <div className='container-tasks'>
        <Header 
          onAdd = {() => setShowAddTask (!showAddTask)}
          showAdd = {showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} 
          onDelete = {deleteTask} 
          onToggle={toggleReminder}/>: 'No Tasks to show' }
      </div>
    </div>
  );
}

export default App;
