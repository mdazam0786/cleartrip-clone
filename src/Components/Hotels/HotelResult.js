import React, { useEffect } from "react";
import HotelResultCard from "./HotelResultCard";
import { useLocation } from "react-router-dom";



export default function HotelResult(props) {
  const location = useLocation();
  const hotelData1 = location.state?.hotelData11 || [];
  useEffect(() => {
    console.log("Azam");
    console.log(hotelData1);
  }, [hotelData1]);

  return (
    <div className="main-result">
      <div className="result-section-container1">
        <div className="result-filter">
          <div className="filter-title">
            <div>All filters</div>
          </div>
          <div className="filter-content">
            <div className="content">
              Sort by:
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              Sort by:
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              Sort by:
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              Sort by:
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              Sort by:
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              Sort by:
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="result-search">
          <input type="text" placeholder="Azam"/>
        </div>
      </div>
      <div className="result-section-container2">
        {hotelData1.map((item) => (
          <div className="result-section" key={item.id}>
            <HotelResultCard
              image={item.images[0]}
              amenities={item.amenities}
              name={item.name}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
