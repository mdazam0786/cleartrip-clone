import React, { useEffect,useState } from "react";
import "./hotels.css";
import { CiLocationOn } from "react-icons/ci";



export default function Hotels() {
  const [hotelData, setHotelData] = useState(null);
  const [searchButton, setSearchButton] = useState(false);
  
  const handleSearch = (e) => {
    console.log("Azam")
    setHotelData(e.target.value);
  };
  
  const handleClick = (e) => {
    console.log("Naiyer");
    setSearchButton(true);
  };


  const Url =
    'https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"mumbai"}&day="Fri';

  async function Apicall() {
    console.log("getting hotels");
    const response = await fetch(Url, {
      method: "GET",
      headers: { projectID: "f104bi07c490" },
    });
    const data = await response.json();
    console.log(response);
    console.log(data);
    console.log(data.data.hotels);
    setHotelData(data?.data?.hotels);

  }
  useEffect(() => {
    Apicall();
  }, []);

  return (
    <div className="hotel-section">
      <div className="hotel-left">
        <div className="left-wrapper">
          <h1>Search hotels</h1>
          <div>
            <p>Enjoy hassle free booking with Cleartrip</p>
          </div>
          <div className="hotel-search">
            <div className="input-wrapper">
              <CiLocationOn className="location-icon" />
              <input
                type="text"
                placeholder="Enter locality, landmark, city or hotel"
                onClick={handleSearch}
              />
            </div>
            <div className="select-option">
              <select className="days">
                <option value="2">Mon</option>
                <option value="3">Tur</option>
                <option value="4">wed</option>
                <option value="2">Thur</option>
                <option value="3">Fri</option>
                <option value="4">Sat</option>
                <option value="1">Sun</option>
              </select>
              <select className="person">
                <option value="1">1 Room, 1 Adults</option>
                <option value="2">1 Room, 2 Adults</option>
                <option value="3">2 Rooms, 4 Adults</option>
              </select>
            </div>
            <div className="search-button">
              <button onClick={handleClick}>Search Hotels</button>
            </div>
          </div>
          <div className="cancel-information">
            <img src="https://www.cleartrip.com/offermgmt/hotelsCommonImages/cfnr/cfnr-home-banner.jpeg" />
          </div>
        </div>
      </div>
      <div className="hotel-right"></div>
      <div className="bank-offer">
        <div>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/banner/BSB_ICICINB_H_1711.jpg" />
        </div>
        <div>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/banner/BSB_welcomheritage_H_1711.jpg" />
        </div>
        <div>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/banner/BSB_PNBCC_H_1711.jpg" />
        </div>
      </div>
    </div>
  );
}
