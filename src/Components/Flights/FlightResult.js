import React, { useEffect } from 'react';
import FlightResultCart from './FlightResultCart';

export default function FlightResult(props) {
  useEffect(() => {
    console.log(props.flResult);
  },[]);
  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>FlightResult</h1>
      {props.flResult && props.flResult.map((item) =>(
        <div className="result-section"><FlightResultCart image={item.images[1]} name={item.name} rating={item.rating} /></div>
      ))}
    </div>
  )
}
