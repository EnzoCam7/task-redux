import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="bg-zinc-800 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList/>}/>
            <Route path='/create' element={<TaskForm/>}/>
            <Route path='/edit/:id' element={<TaskForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
