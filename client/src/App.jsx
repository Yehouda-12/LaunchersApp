import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

import './App.css'
import HomePage from './pages/HomePage'
import AddlauncherPage from './pages/AddLauncherPage'
import LauncherDetailsPage from './pages/LauncherDetailsPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import PrivatRoute from './components/PrivatRoute'
import RegisterPage from './pages/RegisterPage'




function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/dashboard' element={
          <PrivatRoute>
            <HomePage />
          </PrivatRoute>
        } />
        <Route path='/launcher/:id' element={<PrivatRoute>
          <LauncherDetailsPage />
        </PrivatRoute>} />

        <Route path='/add' element={<PrivatRoute roles={["intelligence", "admin"]}>
          <AddlauncherPage />
        </PrivatRoute>} />
        <Route path='/launcher/:id/edit' element={<PrivatRoute roles={["intelligence", "admin"]}>
          <AddlauncherPage />
        </PrivatRoute>} />

        
        <Route path='/register' element={<PrivatRoute roles={["admin"]}>
          <RegisterPage />
        </PrivatRoute>} />




        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
