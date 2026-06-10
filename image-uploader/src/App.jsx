import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const App = () => {
  //step 2
  const [image, setImage] = useState(""); //store the uploaded image
  const [products, setProducts] = useState([]); //displaying the products in the webpage from the DB []//array of upploaded images

  //step 3 funtions - handling events
  function handleImage(e) {
    let file = e.target.files[0];
    if (file.size < 100000) {
      toast.success("Image selected");
    } else {
      toast.error("Image must be less than 100KB");
      return; //Stops function execution.
    }

    const reader = new FileReader(); //Reads uploaded file from system.
    reader.onloadend = () => {
      //Runs AFTER file reading completes.
      setImage(reader.result); //reader.result contains base64 image URL.Stored inside image state.
    };

    //converts image file to url
    reader.readAsDataURL(file);
  }

  //step 4 fetching the data
  function fetchData() {
    axios
      .get(`http://localhost:3000/product_image`)
      .then((x) => setProducts(x.data)) //x.data contains the response data
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  //step 5 handle the form
  function handleForm(e) {
    e.preventDefault();
    let imageData = { image }; //image comtains key and value so stored in object form
    axios
      .post(`http://localhost:3000/product_image`, imageData)
      .then(() => {
        toast.success("Image uploaded");
      })
      .catch(() => {
        toast.error("Failed to upload");
      });
  }

  return (
    <>
      {/* step 1*/}
      <center>
        <div className="card">
          <form onSubmit={handleForm}>
            <input type="file" onChange={handleImage} /> <br /> <br />
            <button>Upload</button>
          </form>
        </div>
      </center>
      <h4>Products</h4>
      {products.map((x) => {
        return <img src={x.image} height={"200px"} alt="" />;
      })}
    </>
  );
};

export default App;
