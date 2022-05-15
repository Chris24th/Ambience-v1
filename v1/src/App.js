
import {useState} from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import MainHeader from './Components/MainHeader'
import Pomodoro from './Components/Pomodoro'
import AllAudio from './Components/AllAudio'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'CPE366 - Assignment',
      day: 'May 17, 8:30am',
    },
    {
      id:2,
      text: 'CPE355 - Study for quiz',
      day: 'May 16, 12:30pm',
    },
    {
      id:3,
      text: 'CPE355 - Main user interface',
      day: 'May 13, 4:30pm',
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
  
  return (
    <div >
      <div>
        <Menu />
        <MainHeader />
      </div>
      <div className = 'arrange'>
        <div className='container-pomodoro'>
          <Pomodoro />
        </div>
        <div  className='container-allAudio'>
          <AllAudio />
        </div>
      </div>
      
      <div className='container-tasks'>
        <Header 
          onAdd = {() => setShowAddTask (!showAddTask)}
          showAdd = {showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} 
          onDelete = {deleteTask}/>: 'No Tasks to show' }
      </div>
    </div>
  );
}
export default App;
