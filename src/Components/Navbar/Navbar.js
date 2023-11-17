import React from "react";
import { MdOutlineFlight } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";
import { IoMdStar } from "react-icons/io";

import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <ul className="left-ul">
          <li>
            <MdOutlineFlight
              style={{
                transform: "rotate(45deg)",
                marginRight: "10px",
              }}
            />
            Flights
          </li>
          <li>
            <RiHotelLine
              style={{
                marginRight: "10px",
              }}
            />
            Hotels
          </li>
          <li>
            <MdOutlineDirectionsBus
              style={{
                marginRight: "10px",
              }}
            />
            Bus
            <img
              src="https://fastui.cltpstatic.com/image/upload/q_100/resources/images/bus/BusNew.png"
              alt="pic"
            />
          </li>
          <li>
            <BiSolidOffer
              style={{
                marginRight: "10px",
              }}
            />
            Offers
          </li>
          <li>
            <TfiBag
              style={{
                marginRight: "10px",
              }}
            />
            My trips
          </li>
          <li>
            <IoMdStar
              style={{
                marginRight: "10px",
              }}
            />
            Cleartrip for Business
          </li>
          <li>
            <BiSupport
              style={{
                marginRight: "10px",
              }}
            />
            Support
          </li>
        </ul>
      </div>
    </div>
  );
}
