import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { useAxiosGet } from './HttpRequest';

export const Product = () => {
 
   const { id }=useParams()
    const url=`https://5fc613354931580016e3c8f0.mockapi.io/products/${id}`
  
    let product=useAxiosGet(url)

    return (
        <div className="card-single">


           {product.data?
         <>
         <div className='card-heading'><h1>{product.data.name}</h1></div>
         <div> <img className="card-image" src={product.data.images} /></div>
         <div className="card-price">{product.data.price}</div>
         <div className="card-price">{product.data.description}</div>
        
         </>
        :<div><Loader /></div>
        }
        
        </div>
    )
}
