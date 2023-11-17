import React from 'react'

export default function HotelResultCard(props) {
  return (
    <div className='main-box'>
      
      <div className='hotel-result-card'>
        <div className='hotel-result-card-image'>
          <img src={props.image} alt='hotel-result-card-image' />
        </div>
        <div className='hotel-result-card-content'>
          <h3 className='hotel-result-card-title'>{props.title}</h3>
          <p className='hotel-result-card-description'>{props.description}</p>
        </div>
      </div>

    </div>
  )
}

