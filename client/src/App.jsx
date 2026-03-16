import { BrowserRouter,Routes,Route } from 'react-router'

import './App.css'
import HomePage from './pages/HomePage'
import AddlauncherPage from './pages/AddLauncherPage'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/add' element={<AddlauncherPage/>}/>
      <Route path='/lancher/:id' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
