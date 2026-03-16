import { BrowserRouter,Routes,Route } from 'react-router'

import './App.css'
import HomePage from './pages/HomePage'
import AddlauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/add' element={<AddlauncherPage/>}/>
      <Route path='/launcher/:id' element={<LauncherDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
