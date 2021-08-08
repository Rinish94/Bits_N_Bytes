import React from "react";
import "./BookCards.css";
import Chat from "../ChatApp/Chat";
import { saveData } from "../../Utils/LocalStorage";
import swal from "sweetalert";
const BookCards = ({ data }) => {
 async function postData(data) {
    await swal({
      title: "Added to Cart!!",
      // text: "I will get back to you soon !",
      icon: "success",
    });
    saveData("bookId", data);
    // console.log(data);
  }
  return (
    <div>
      <div className="container">
        {/* <!-- Start	Product details --> */}

        <div className="product-details">
          {/* <!-- 	Product Name --> */}
          <p className="product-detailsP">
            <Chat />
          </p>
          <h1>{data?.book_name}</h1>

          {/* <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span> */}

          {/* <!-- 		Control --> */}
          <div className="control">
            {/* <!-- Start Button buying --> */}
            <button onClick={() => postData(data._id)} className="btn">
              {/* <!-- 		the Price --> */}
              <span className="price">₹ {data?.price}</span>
              {/* <!-- 		shopping cart icon--> */}
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              {/* <!-- 		Buy Now / ADD to Cart--> */}
              <span className="buy">Buy Now</span>
            </button>
            {/* <!-- End Button buying --> */}
          </div>
        </div>

        <div className="product-image">
          <img src={data?.image} alt="books_Image" />
          <div className="info">
            <h2>The Description</h2>
            <p>{data?.description}</p>
          </div>
        </div>
        {/* <!--  End product image  --> */}
      </div>
    </div>
  );
};

export default BookCards;
