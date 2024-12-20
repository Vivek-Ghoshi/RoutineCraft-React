import React from 'react'
import UserDashboard from './pages/Consumer/UserDashboard'
import RoutineCard from './pages/Consumer/RoutineCard'
import ProgressTracker from './pages/Consumer/ProgressTracker'
import { Route, Routes } from 'react-router-dom'

const Consumer = () => {
  return (
    <>
    <Routes>
     
       <Route path='/dashboard' element={<UserDashboard/>} />
       <Route path='/progress' element={<ProgressTracker/>} />
       <Route path='/routine' element={<RoutineCard/>} />

    </Routes>
    
    
    
    </>
  )
}

export default Consumer