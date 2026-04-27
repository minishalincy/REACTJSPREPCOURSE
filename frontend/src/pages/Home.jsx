import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <h2>
          Welcome to <span style={{ color: "blue" }}>Bucky🛒</span>
        </h2>
        <button>Shop now</button>
        <p>Shop Your Bucketlist</p>
      </div>

      <center>
        <h2 className="pro">Products</h2>
        <div className="products">
          <img src="https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png" alt="iphone 17 pro max" />
          <img src="https://shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=90/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=180/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=375/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=480/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=768/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=1024/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=1280/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=1366/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=1440/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=1920/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=2560/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=3840/shop.switch.com.my/cdn/shop/files/iPad_A16_Cellular_Pink_PDP_Image_Position_1__en-US.jpg?v=1741326718&width=4000" alt="ipad" />
          <img src="https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-23934.jpg" alt="macbook pro" />
        </div>


        <div className="products">
          <img src="https://static.ftshp.digital/img/p/9/9/1/6/5/1/991651.jpg" alt="iphone 17 pro max" />
          <img src="https://m.media-amazon.com/images/I/71gi11m8qHL.jpg" alt="ipad" />
          <img src="https://tse2.mm.bing.net/th/id/OIP.eVjasQUSYLIpd9aVg6yteQHaKs?pid=Api&P=0&h=180" alt="macbook pro" />
        </div>
      </center>
      <Footer/>
    </>
  );
};

export default Home;
