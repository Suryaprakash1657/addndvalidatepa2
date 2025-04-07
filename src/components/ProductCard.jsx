import React from 'react'
import '../index.css'
import RatingWidget from './RatingWidget';

function ProductCard({image,name,description,avgRating,totalRatings,id,onRate}){
    
  return (
    <div>
        <img src={image} alt={image} />
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h3>{avgRating}</h3>
        <h3>{totalRatings}</h3>
        <RatingWidget id={id} onRate={onRate} />
    </div>
  )
}

export default ProductCard
