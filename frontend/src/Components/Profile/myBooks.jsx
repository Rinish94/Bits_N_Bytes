import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import BookCards from "../BookList/BookCards";
import axios from "axios";
import "../BookList/BookCards.css";
import { useSelector, useDispatch } from "react-redux";

export default function MyBooks() {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.auth.currentUser);
  // const [Loading, setIsLoading] = useState(false);
  function getAlldata() {
    axios
      .get(`http://localhost:8811/book/user/${user._id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAlldata();
  }, []);
  // console.log(data.data);

  //   function typeFilter(val) {
  //     const cat = val;
  //     // console.log(cat);
  //     axios
  //       .get(`http://localhost:8811/book/type/${cat}`)
  //       .then((res) => setData(res.data))
  //       .catch((err) => console.log(err));
  //   }
  //   function preOwned(vals) {
  //     axios
  //       .get(`http://localhost:8811/book/${vals}`)
  //       .then((res) => setData(res.data))
  //       .catch((err) => console.log(err));
  //   }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <p></p>
      {/* <div className="navOptions">
        <div onClick={() => getAlldata()}>All</div>
        <div onClick={() => typeFilter("sci-fi")}>Sci-Fi</div>
        <div onClick={() => typeFilter("programming")}>Programming</div>
        <div onClick={() => typeFilter("religious")}>Religious</div>
        <div onClick={() => typeFilter("comics")}>Comics</div>
        <div onClick={() => typeFilter("educational")}>Educational</div>
        <div onClick={() => typeFilter("romantic")}>Romantic</div>
        <div onClick={() => typeFilter("thriller")}>Thriller</div>
        <div onClick={() => preOwned("sale")}>Pre-Owned</div>
        <div onClick={() => preOwned("charity")}>Charity</div>
      </div> */}
      <br />
      <h1>List of Books</h1>
      <div className="main-container">
        {data.data?.map((ele) => (
          <BookCards data={ele} key={ele._id} />
        ))}
      </div>
    </div>
  );
}
