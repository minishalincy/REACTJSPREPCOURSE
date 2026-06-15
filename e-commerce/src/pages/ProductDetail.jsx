import React from 'react'

const ProductDetail = () => {
  return (
   <>
    <div className="adminnav">
        <h2 style={{ color: "white" }}>Bucky🧺</h2>
        <div className="right">
          <h1>Products</h1>

          <h1>Orders</h1>

          <button onClick={logout} className="logoutbtn">
            Log out
          </button>
        </div>
      </div>
   </>
  )
}

export default ProductDetail