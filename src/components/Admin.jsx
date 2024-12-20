import React from 'react'
import AdminAnalytics from './pages/Admin/AdminAnalytics'
import RoutineForm from './pages/Admin/RoutineForm'
import RoutineTemplates from './pages/Admin/RoutineTemplates'
import { Route, Routes } from 'react-router-dom'

const Admin = () => {
  return (
    <>
     <Routes>
      
      <Route path='/analysis' element={<AdminAnalytics/>} />
      <Route path='/routine/create' element={<RoutineForm/>} />
      <Route path='/routine/template' element={ <RoutineTemplates/>} />

     </Routes>
  
    </>
  )
}

export default Admin