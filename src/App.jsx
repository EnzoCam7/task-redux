import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/create' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
