import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <center>
        <div className="herosection">
          <h2>
            Welcome to{" "}
            <span style={{ color: "rgb(7, 70, 10)" }}>
              Bucky🧺
            </span>
          </h2>

          <button className="herobtn">Shop now</button>
        

        <p>Shop Your Bucketlist 🠇</p>
     
      </div>
       </center>

      <center>
        <h2 className="pro">Products</h2>

        <div className="products">

          {/* Product Card */}
          <div className="card">
            <img
              src="https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png"
              alt="iphone"
            />

            <h3>iPhone 17 Pro</h3>

            <div className="btns">
              <button className="bucketbtn">
                Add to Bucketlist
              </button>

              <button className="buybtn">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Card */}
          <div className="card">
            <img
              src="https://shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718"
              alt="ipad"
            />

            <h3>iPad</h3>

            <div className="btns">
              <button className="bucketbtn">
                Add to Bucketlist
              </button>

              <button className="buybtn">
                Buy Now
              </button>
            </div>
          </div>

          {/* <div className="categorycards">
            
              <card><img src="" alt="" /></card>
              <card></card>
              <card></card>
              <card></card>
              <card></card>
            
          </div> */}

          {/* Product Card */}
          <div className="card">
            <img
              src="https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-23934.jpg"
              alt="macbook"
            />

            <h3>MacBook Pro</h3>

            <div className="btns">
              <button className="bucketbtn">
                Add to Bucketlist
              </button>

              <button className="buybtn">
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </center>
      <Footer/>
    </>
  );
};

export default Home;