import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'

function App() {



  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     
       <Route path='/profile'
       
       element={
       
        <ProtectedRoute>
            <Profile/>
        </ProtectedRoute>
     
      
      
      }
       
       
       />
   </Routes>
   </BrowserRouter>
  )
}

export default App
