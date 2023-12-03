import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./hotelDescription.css";
import RoomDetail from "./Rooms/RoomDetail";
import { FaTripadvisor } from "react-icons/fa";

export default function HotelDesription(props) {
  const location = useLocation();
  const detailsData = location.state?.hotelDetailsData1 || [];

  const getRandom = (min, max) => {
    min = Math.min(min);
    max = Math.max(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const random = getRandom(3, 5);

  useEffect(() => {
    console.log(detailsData);
    console.log("Naiyer Azam");
  }, [detailsData]);

  return (
    <div className="main-desc">
      <div className="description-heading">
        <Link to="/General">
          <div className="description-heading-content">General</div>
        </Link>
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
        <div className="hotel-desc-left">
          <h1>{detailsData.name}</h1>
          <duv className="hotel-rating">
            <p>{random}-star Hotel . </p>
            <p>{detailsData.location}</p>
          </duv>
          <div className="rating-logo">
            <h4>{detailsData.rating}/5</h4>
            <div>
              <FaTripadvisor
                style={{
                  cursor: "pointer",
                  paddingRight: "5px",
                  width: "25px",
                  height: "25px",
                }}
              />
              <svg height="16" width="16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#00AA6c" />
              </svg>
              <svg height="16" width="16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#00AA6c" />
              </svg>
              <svg height="16" width="16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#00AA6c" />
              </svg>
              {/*               
              {detailsData.rating === 3.5 ? (
                <svg height="16" width="16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#00AA6c" />
                </svg>
              ) : (
                <svg height="56" width="56" fill="none">
                  <circle cx="18" cy="8" r="8" fill="#00AA6c" />
                </svg>
              )}
              {detailsData.rating == 4.5 ? (
                <svg height="16" width="16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#00AA6c" />
                </svg>
              ) : (
                <svg height="16" width="16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#00AA6c" />
                </svg>
              )} */}
            </div>
          </div>
          <h2>{detailsData.amenities.join(" ")}</h2>
          {/* <h2>{detailsData.houseRules[1]}</h2> */}
        </div>
        <div className="hotel-desc-right">
          <div className="hotel-desc-img">
            <img
              src={detailsData.images}
              alt={detailsData.name}
              className="description-image"
            />
          </div>
        </div>
      </div>
      {detailsData.rooms.map((room, index) => (
        <RoomDetail roomDetail={room} />
      ))}
    </div>
  );
}
