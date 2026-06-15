import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="right">
          <h2>Bucky🧺</h2>
        </div>
        <div>
          <h6>Shop Your BucketList</h6>
        </div>

        <div className="">
          {/* <p className='left p'>Products</p> */}
          <ul>
            <li>Mobiles</li>
            <li>Clothing</li>
            <li>Makeup & Skincare</li>
            <li>Shoes</li>
          </ul>
        </div>

        <div className="contact">
          <h2>Contact us</h2>

          <ul>
            <li>Phone: +9849874860</li>
            <li>Location: Bengaluru, India</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
