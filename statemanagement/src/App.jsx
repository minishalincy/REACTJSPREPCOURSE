import React, { useState } from 'react'
import UseStateE from './components/UseStateE'
import UseStateCounter from './components/UseStateCounter'
import CRUsingIfElse from './components/CRUsingIfElse'
import UseStateP from './components/UseStateP'
import CRUsingShortCircuit from './components/CRUsingShortCircuit'
import CRexampleOne from './components/CRexampleOne'
import CRexampleTwo from './components/CRexampleTwo'
import CRTerenary from './components/CRTernary'
import CRTernaryTwo from './components/CRTernaryTwo'

const App = () => {

  return (
    
    <>
    <UseStateE/>
    <UseStateCounter/>
    <CRUsingIfElse/>
    <UseStateP/>
    <CRUsingShortCircuit/>
    <CRexampleOne/>
    <CRexampleTwo/>
    <CRTerenary/>
    <CRTernaryTwo/>

    </>
    
  )
}
export default App