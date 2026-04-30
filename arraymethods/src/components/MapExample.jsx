import React from "react";

const MapExample = () => {
  let users = ["Minisha", "Lincy", "Mini"];
  let bucket_list = ["https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png",
    "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-23934.jpg",
    "https://static.ftshp.digital/img/p/9/9/1/6/5/1/991651.jpg","https://m.media-amazon.com/images/I/71gi11m8qHL.jpg"]
  return (
    <>
      <h1>Users👥</h1>
      {users.map((x) => {
        return <h4>{x}</h4>
      })}

      <h1>My Bucket List</h1>
      {bucket_list.map((x)=>{
        return <img src={x} height={"200px"} alt="" />
      })}
    </>
  );
};

export default MapExample;
