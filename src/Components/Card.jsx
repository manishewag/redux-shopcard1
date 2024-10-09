/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


const Card = ({ item }) => {
   
    const {id, title, description, category, price, image} = item;

 return (
    <div className='d-flex'>
        <div className='card h-100' key={id}>
        <img src={image} alt="" className='card-img-top h-75'/>
        <div className='card-body'>
        <h4>{title}</h4>
        <h6>${price}</h6>
        <p>{description}</p>
        <p>{category}</p>
        <button>Add to Cart</button>
        </div>
        </div>
    </div>
    
  )
}

export default Card