import React from 'react'
import UseStateE from './components/UseStateE'
import UseStateCounter from './components/UseStateCounter'
import ConditionalRenderingUsingIfElse from './components/CRUsingIfElse'
import UseStateP from './components/UseStateP'
import CRUsingShortCircuit from './components/CRUsingShortCircuit'

const App = () => {
  return (
    
    <>
    <UseStateE/>
    <UseStateCounter/>
    <CRUsingIfElse/>
    <UseStateP/>
    <CRUsingShortCircuit/>
    </>
  )
}

export default App