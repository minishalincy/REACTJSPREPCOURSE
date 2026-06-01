import React, { useState } from 'react'

const FilterByCategories = () => {
    const[category, setCategory] = useState("")
    const products = [
        {name:"iphone 17", category:"Mobiles"},
        {name:"Converse", category:"Shoes"},
    ]

    const filteredProducts = products.filter((x)=>{
        return x.category === category
    })
  return (
   <>
     <button>Mobiles</button>
     <button>Shoes</button>
   </>
  )
}

export default FilterByCategories