import React, { useEffect } from 'react'

export default function HotelResultCard(props) {
  useEffect(() =>{
    console.log(props.name);
    console.log(props.rating);
    console.log(props.image);
  },[]);

  

  return (
    <div className='main-box'>
      
      <div className='hotel-result-card'>
        <div className='hotel-result-card-image'>
          <img src={props.images} alt='hotel-result-card-image' />
         
        </div>
        <div className='hotel-result-card-content'>
          <h3 className='hotel-result-card-name'>{props.name}</h3>
          <h4 className='hotel-result-card-rationg'>{props.rating}</h4>
        </div>
      </div>

    </div>
  )
}

