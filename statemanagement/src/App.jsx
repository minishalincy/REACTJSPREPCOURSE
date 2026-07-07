import React, { useState } from 'react'
import UseStateE from './components/UseStateE'
import UseStateCounter from './components/UseStateCounter'
import CRUsingIfElse from './components/CRUsingIfElse'
import UseStateP from './components/UseStateP'
import CRUsingShortCircuit from './components/CRUsingShortCircuit'
import CRexampleOne from './components/CRexampleOne'

const App = () => {

  return (
    
    <>
    <UseStateE/>
    <UseStateCounter/>
    <CRUsingIfElse/>
    <UseStateP/>
    <CRUsingShortCircuit/>
    <CRexampleOne/>

    </>
    
  )
}
export default App