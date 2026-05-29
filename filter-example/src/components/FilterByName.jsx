import React, { useState } from "react";

const FilterByName = () => {
  const [mobile, setMobile] = useState("");

  const mobileProducts = [
    "iPhone 15",
    "Samsung Galaxy S24",
    "OnePlus 12",
    "Xiaomi Redmi Note 13",
    "Realme Narzo 70",
    "Poco X6",
    "Vivo V30",
    "Oppo Reno 11",
    "Google Pixel 8",
    "Nothing Phone 2",
    "Motorola Edge 50",
    "Asus ROG Phone 8",
    "Nokia G42",
    "Huawei P60",
    "Honor Magic 6",
    "Infinix Zero 30",
    "IQOO Neo 9",
    "JioPhone Next",
    "Karbonn Titanium",
    "Lava Blaze 5G",
    "Micromax IN Note",
    "Nubia RedMagic 9",
    "Oukitel WP30",
    "Panasonic Eluga",
    "Qubo Smart Phone",
    "Razer Phone 2",
    "Sony Xperia 1",
    "Tecno Camon 30",
    "Umidigi A15",
    "Vertu Signature Touch",
    "Walton Primo",
    "Xolo Era",
    "YotaPhone 3",
    "ZTE Axon 40",
  ];

  let filteredProducts = mobileProducts.filter((x) => {
    return x.toLowerCase().startsWith(mobile.toLowerCase()); //can use includes() method too
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search 🔍"
        value={mobile}
        onChange={(x) => {
          setMobile(x.target.value);
        }}
      />

      {/* logic using nested ternary operator */}

      {
        mobile === "" ? (
          <p style={{ color: "gray" }}>Start Searching..</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((x) => {
            return <p>{x}</p>;
          })
        ) : (
          <p style={{ color: "red" }}>Result not found</p>
        )
      }
    </>
  );
};

export default FilterByName;