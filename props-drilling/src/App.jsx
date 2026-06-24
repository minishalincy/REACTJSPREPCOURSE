import React from 'react'
import AppData from './context/AppContext'
import GrandParent from './pages/GrandParent'
const App = () => {
  let name = "Minisha"
  return (
    <>
    <AppData.Provider value = {name}>
    <GrandParent/>
    </AppData.Provider>
    </>
  )
}

export default App