import React, { useEffect, useState } from "react";
import HotelResultCard from "./HotelResultCard";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { LuBadgePercent } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { act } from "react-dom/test-utils";

export default function HotelResult(props) {
  const [hotelId, setHotelId] = useState(null);
  const [hotelDetails, setHotelDetails] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  
  const [dropdownValue, setDropdownValue] = useState("");
  const [dropdownValueRating, setDropdownValueRating] = useState("");
  const [hotelData1, setHotelData1] = useState(location.state?.hotelData11);
  const handleChange = (event) => {
    setDropdownValue(event.target.value);
    sortBasedOnPrice(event.target.value);
    
  };

  const handleChangeRating = (event) => {
    setDropdownValueRating(event.target.value);
    setHotelData1(sortBasedOnRating(event.target.value));
  };

  

  // function sort () {
  //   products.sort((a, b) => (a.color > b.color ? 1 : -1));
  // }

  function sortBasedOnPrice(option) {
    console.log(option);
    if (option === "1") {
      console.log(option);
      return hotelData1;
    } else if (option === "2") {
      hotelData1.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    } else if (option === "3") {
      console.log(option);
      hotelData1.sort((a, b) =>
        (a.rooms[0].costDetails.baseCost < a.rooms[0].costPerNight
          ? a.rooms[0].costDetails.baseCost
          : a.rooms[0].costPerNight) <
        (b.rooms[0].costDetails.baseCost < b.rooms[0].costPerNight
          ? b.rooms[0].costDetails.baseCost
          : b.rooms[0].costPerNight)
          ? 1
          : -1
      );
    } else if (option === "4") {
      console.log(option);
      hotelData1.sort((a, b) =>
        (a.rooms[0].costDetails.baseCost < a.rooms[0].costPerNight
          ? a.rooms[0].costDetails.baseCost
          : a.rooms[0].costPerNight) >
        (b.rooms[0].costDetails.baseCost < b.rooms[0].costPerNight
          ? b.rooms[0].costDetails.baseCost
          : b.rooms[0].costPerNight)
          ? 1
          : -1
      );
    }
  }

  function sortBasedOnRating(option) {
    var res;
    if (option === "2") {
      console.log(option);

      res=hotelData1.filter((a) => a.rating >= 4.5);
    } else if (option === "3") {
      console.log(option);

       res=hotelData1.filter((a) => a.rating >= 4);
    } else if (option === "4") {
      console.log(option);

       res=hotelData1.filter((a) => a.rating >= 3.5);
    } else if (option === "5") {
      console.log(option);

      res=hotelData1.filter((a) => a.rating >= 3);
    }
    console.log(res);
    return res;
  }

  function change(event) {
    event.persist(); //THE MAIN LINE THAT WILL SET THE VALUE
    this.setState(event.target.value);
    sortBasedOnPrice(event.target.value);
  }

  // for show the discount percent
  function calculateDiscount(actualPrice, appliedPrice) {
    let per;
    if (actualPrice > appliedPrice) {
      per = (appliedPrice / actualPrice) * 100;
    } else {
      per = (actualPrice / appliedPrice) * 100;
    }
    return Math.ceil(100 - per);
  }

  async function Apicall(id) {
    console.log(id);
    setHotelId(id);

    console.log("getting hotels details");
    console.log(hotelId);

    const Url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`;

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

  useEffect(() => {
    console.log("Azam");
    // console.log(hotelData1);
    // Apicall();
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
              <div>Sort by:</div>
              <select onChange={handleChange} value={dropdownValue}>
                <option value="1">Recommended</option>
                <option value="2">Top-rated</option>
                <option value="3">Price: High to Low</option>
                <option value="4">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              <LuBadgePercent />
              <select>
                <option value="1">Deals</option>
                <option value="2">Jackpot deals</option>
                <option value="3">Bestseller hotels</option>
                <option value="4">Best budget deals</option>
                <option value="5">Premium hotels</option>
                <option value="6">Deal of the day</option>
              </select>
            </div>
            <div className="content">
              <select>
                <option value="1">Star category</option>
                <option value="2">5-star</option>
                <option value="3">4-star</option>
                <option value="4">3-star</option>
              </select>
            </div>
            <div className="content">
              <FaRegStar />
              <select onChange={handleChangeRating} value={dropdownValueRating}>
                <option value="2">4.5 & above</option>
                <option value="3">4 & above</option>
                <option value="4">3.5 & above</option>
                <option value="5">3 & above</option>
              </select>
            </div>
            <div className="content">
              <GrLocation />
              <select>
                <option value="1">Locality</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
            <div className="content">
              <LuBadgePercent />
              <select>
                <option value="1">Price</option>
                <option value="1">Top-rated</option>
                <option value="1">Price: High to Low</option>
                <option value="1">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="result-search">
          <IoIosSearch className="hotel-result-icon" />
          <input type="text" />
        </div>
      </div>
      <div className="result-section-container2">
        {hotelData1.map((item) => (
          <div
            className="result-section"
            onClick={() => {
              Apicall(item._id);
            }}
          >
            <HotelResultCard
              image={item.images[0]}
              amenities={item.amenities}
              name={item.name}
              rating={item.rating}
              baseCost={
                item.rooms[0].costPerNight < item.rooms[0].costDetails.baseCost
                  ? item.rooms[0].costPerNight
                  : item.rooms[0].costDetails.baseCost
              }
              tax={item.rooms[0].costDetails.taxesAndFees}
              costPerNight={
                item.rooms[0].costDetails.baseCost > item.rooms[0].costPerNight
                  ? item.rooms[0].costDetails.baseCost
                  : item.rooms[0].costPerNight
              }
              discount={calculateDiscount(
                item.rooms[0].costPerNight,
                item.rooms[0].costDetails.baseCost
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
