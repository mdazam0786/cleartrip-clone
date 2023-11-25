import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./hotelDescription.css";

export default function HotelDesription(props) {
  const location = useLocation();
  const detailsData = location.state?.hotelDetailsData1 || [];

  useEffect(() => {
    console.log(detailsData);
    console.log("Naiyer Azam");
  }, [detailsData]);

  return (
    <div className="main-desc">
      <div className="description-heading">
        <Link to="/General">
          <div className="description-heading-content">General</div>
        </Link >
        <Link to="/General">
          <div className="description-heading-content">Amenities</div>
        </Link>
        <Link to="/General">
          <div className="description-heading-content">Rules</div>
        </Link>
        <Link to="/General">
          <div className="description-heading-content">About</div>
        </Link>
        <Link to="/General">
          <div className="description-heading-content">Location</div>
        </Link>
        <Link to="/General">
          <div className="description-heading-content">Review</div>
        </Link>
        <Link to="/General">
          <div className="description-heading-content">Rooms</div>
        </Link>
      </div>

      <div className="hotel-desc">
        <div className="hotel-desc-left">{detailsData.name}</div>
        <div className="hotel-desc-right">
          <div className="description-image">{detailsData.name}</div>
          <img
            src={detailsData.images}
            alt={detailsData.name}
            className="description-image"
          />
        </div>
      </div>
    </div>
  );
}
