import React from "react";

const Footer = function () {
  return (
    <>
      <div className="footer">
        <div className="right-footer">
          <h2>Bucky</h2>
        </div>

        <div className="product-category">
          <h2>Products</h2>
          <ul>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Foot Wear</li>
            <li>Make-up</li>
            <li>Clothings</li>
          </ul>
        </div>

        <div className="contact">
          <h2>Contact us</h2>

          <ul>
            <li>Phone: +9849874860</li>
            <li>Location: Bengaluru</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
