import React, { useEffect } from "react";
import "./hotelResult.css";
import "./hotelResultCart.css";

export default function HotelResultCard(props) {
  useEffect(() => {
    console.log(props.name);
    console.log(props.rating);
    console.log(props.image);
    console.log(props.amenities);
  }, []);

  return (
    <div className="hotel-cart">
      <div className="hotel-cart-image">
        <img src={props.image} alt="hotel-cart-image" />
      </div>
      <div className="hotel-cart-content">
        {/* <h3 className="hotel-cart-amenities">{props.amenities}</h3> */}
        <h3 className="hotel-cart-name">{props.name}</h3>
        <h4 className="hotel-cart-rationg">{props.rating}</h4>
      </div>
      <h3>Sold Out</h3>

    </div>
  );
}
