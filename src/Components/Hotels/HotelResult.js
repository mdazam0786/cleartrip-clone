import React, { useEffect } from "react";
import HotelResultCard from "./HotelResultCard";

export default function HotelResult(props) {
  useEffect(() =>{
    console.log("Azam");
    console.log(props.result);
  },[]);
  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>HotelResult</h1>
        {props.result && props.result.map((item) =>(
          <div className="result-section"><HotelResultCard image={item.images[1]} name={item.name} rating={item.rating} /></div>
        ))}
      
    </div>
  );
}
