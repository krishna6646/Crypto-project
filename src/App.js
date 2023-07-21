import React from 'react'

import { Navbar } from './components/Navbar'
import Welcome from './components/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

import LoginForm from './components/LoginForm'

import './components/welcome.css'
import Dashboard from './components/Dashboard'
import Form from './components/Form'


export const App = () => {
  return (

<>
          <Navbar />
          <Welcome />
          
          
            <Routes>
              <Route path='/login' element={<LoginForm />}>
              </Route>
              <Route path='/signin' element={<Form />}>
              </Route>
              <Route path='/Dashboard' element={<Dashboard />}/>
              
            </Routes>
            
         
          <Footer />
          </>     
      

      );
}
