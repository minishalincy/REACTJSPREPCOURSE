import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ExampleOne from './pages/ExampleOne'
import ExampleTwo from './pages/ExampleTwo'

const App = () => {
  return (
   <>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/example1' element={<ExampleOne/>}/>
    <Route path='/example2' element={<ExampleTwo/>}/>
   </Routes>
   </>
  )
}

export default App