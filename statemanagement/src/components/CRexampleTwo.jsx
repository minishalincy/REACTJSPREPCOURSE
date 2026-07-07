import React, { useEffect, useState } from "react";

const CRexampleTwo = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Fetched Data");  //intially the data is null after fetching the data chages to fetched data
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>{loading ? <h1>Loading...</h1> : <h1>{data}</h1>}</div>
    </>
  );
};

export default CRexampleTwo;
