import React from 'react'

const FilterExample = () => {

    let num = [10,30,50,60]
    let filteredData = num.filter((x)=>{
        return x>10
    })
  return (
    <>
    <h1>Filtered numbers:</h1>
    <ul>
        {
            filteredData.map((x)=>{
                return <li>{x}</li>
            })
        }
    </ul>
    </>
  )
}

export default FilterExample