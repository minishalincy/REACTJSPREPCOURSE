import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  let price = 169000;
  let total = counter * price;
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="left-container">
          <img
            src="https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/-/08c7217e890e45b4bb8eddadc8b84200?version=0&x=3840&quality=75"
            alt=""
          />
          <h3>
            <span style={{ fontWeight: "bold" }}>Name:</span> iPhone 17 Pro Max
          </h3>
          <h3>
            <span style={{ fontWeight: "bold" }}>Price:</span> 1,69,000
          </h3>
          <div className="btn-container">
            <button onClick={decrement} className="incBtn">
              -
            </button>
            {counter}
            <button onClick={increment} className="incBtn">
              +
            </button>
            <h2>Total : {total} </h2>
          </div>
        </div>

        <div className="right-container">
          <h3>
            <span style={{ fontWeight: "bold" }}>Name:</span> iPhone 17 Pro Max
          </h3>
          <h3>
            <span style={{ fontWeight: "bold" }}>Price:</span> 1,69,000
          </h3>

          <h3>
            <span style={{ fontWeight: "medium" }}>Specifications:</span>
          </h3>
          <ul>
            <li>
              6.9-inch Super Retina XDR Display with ProMotion (120Hz) for
              ultra-smooth visuals.
            </li>
            <li>
              A19 Pro Chip for faster performance, enhanced AI capabilities, and
              power efficiency.
            </li>
            <li>
              48MP Triple-Camera System with advanced zoom, Night Mode, and 8K
              video recording.
            </li>
            <li>
              Long-lasting Battery Life with USB-C fast charging and improved
              wireless charging.
            </li>
          </ul>

          <div>
            <h2>Quantity: {counter} x {price}</h2>
            <h2>Total price: {total}</h2>
          </div>
          <button className="buyBtn">Buy</button>
        </div>
        
      </div>
    </>
  );
};

export default App;
