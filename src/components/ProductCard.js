import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
    return (
       <Link to={`./products/${product.id}`}> 
       <div><div> {product.name}</div>
           
           <div>
               <img src={product.image} />
           </div>
         <div>{product.price}</div>  
       </div>
       </Link> 
    )
}
