import React, { useEffect, useState } from "react";
import HotelResultCard from "./HotelResultCard";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";




export default function HotelResult(props) {
  const [hotelId, setHotelId] = useState(null);
  const [hotelDetails, setHotelDetails] = useState(null);
  const navigate = useNavigate();

  async function Apicall(id) {
    console.log(id);
    setHotelId(id);

    console.log("getting hotels details");
    console.log(hotelId);

    const Url=`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`;

    console.log(Url);
    const response = await fetch(Url, {
      method: "GET",
      headers: { projectID: "f104bi07c490" },
    });
    const data = await response.json();
    console.log(response);
    console.log(data);
    console.log(data?.data);
    setHotelDetails(data?.data);
    // console.log(hotelData);

    navigate(`/hotelDescription`, { state: { hotelDetailsData1: data?.data } });
  }


  const location = useLocation();
  const hotelData1 = location.state?.hotelData11 || [];
  useEffect(() => {
    console.log("Azam");
    // console.log(hotelData1);
    // Apicall();
  }, []);

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
              
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              
              <select>
                <option value="1">Recommended</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              
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
          <IoIosSearch className="hotel-result-icon"/>
          <input type="text" />
        </div>
      </div>
      <div className="result-section-container2">
        {hotelData1.map((item) => (
          <div className="result-section" onClick={()=>{
            Apicall(item._id);
          }}>
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
