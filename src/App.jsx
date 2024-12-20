import React from 'react'
import Admin from './components/Admin'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Consumer from './components/Consumer'
import Login from './components/pages/Auth/Login'
import NotFound from './components/WildCard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Login/>}/> 
      <Route path='/admin/*' element={<Admin/>} />
      <Route path='/user/*' element={<Consumer/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App