import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const[counter, setCounter] = useState(0)

  function increment(){
    setCounter(counter+ 1)
  }

   function decrement() {
    
      setCounter(counter - 1);
    
  }
  return (

    <>
    <Navbar/>

    <div className='container'>
      <div className='left-container'>
        <img src="https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/-/08c7217e890e45b4bb8eddadc8b84200?version=0&x=3840&quality=75" alt="" />
        <h3><span style={{fontWeight:"bold"}}>Name:</span> iPhone 17 Pro Max</h3>
        <h3><span style={{fontWeight:"bold"}}>Price:</span> 1,69,000</h3>
         <div className='btn-container'>
        <button onClick={decrement} className="incBtn">-</button>
        {counter}
        <button onClick={increment} className="incBtn">+</button>
        </div>
      </div>

      <div className='right-container'>

      </div>
    </div>
    </>
  )
}

export default App