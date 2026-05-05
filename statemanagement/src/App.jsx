import React from 'react'
import UseStateE from './components/UseStateE'
import UseStateCounter from './components/UseStateCounter'
import ConditionalRenderingUsingIfElse from './components/ConditionalRenderingUsingIfElse'
import UseStateP from './components/UseStateP'
import ConditionalRenderingUsingShortCircuit from './components/ConditionalRenderingUsingShortCircuit'

const App = () => {
  return (
    
    <>
    <UseStateE/>
    <UseStateCounter/>
    <ConditionalRenderingUsingIfElse/>
    <UseStateP/>
    <ConditionalRenderingUsingShortCircuit/>
    </>
  )
}

export default App