import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
    return (
       <Link to={`./products/${product.id}`}> 
       <div className="card-wrapper"> 
           
           <h1 className='card-heading'> {product.name}</h1>

          
           <div>
          <img className="card-image"src={product.images}  />
           </div>
         <div className="card-price">{product.price}</div>

         <button className="card-button">View</button>
       </div>
       </Link> 
    )
}
