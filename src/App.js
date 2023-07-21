import React from 'react'

import { Navbar } from './components/Navbar'
import Welcome from './components/Welcome'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

import LoginForm from './components/LoginForm'

import './components/welcome.css'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import { Mycompo } from './components/Mycompo'


export const App = () => {
  return (

    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signin' element={<Form />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>


  );
}
