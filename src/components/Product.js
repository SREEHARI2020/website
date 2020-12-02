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
        <div>


           {product.data?
         <>
         <div>{product.data.name}</div>
         <div> <img src={product.data.images} /></div>
         <div>{product.data.price}</div>
         <div>{product.data.description}</div>
        
         </>
        :<div><Loader /></div>
        }
        
        </div>
    )
}
