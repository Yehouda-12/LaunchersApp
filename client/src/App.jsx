import { BrowserRouter,Routes,Route, Navigate } from 'react-router'

import './App.css'
import HomePage from './pages/HomePage'
import AddlauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import Navbar from './components/Navbar'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>

      <Route path='/add' element={<AddlauncherPage/>}/>
      <Route path='/launcher/:id/edit' element={<AddlauncherPage/>}/>

      <Route path='/launcher/:id' element={<LauncherDetailsPage/>}/>

      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
